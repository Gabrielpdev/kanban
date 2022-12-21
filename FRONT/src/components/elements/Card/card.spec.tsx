import { screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../../styles/renderTheme';
import userEvent from '@testing-library/user-event';
import { Card } from '.';

describe('Card', () => {
  it('should render Card', () => {
    const defaultCard = {
      id: 'uuid',
      titulo: 'titulo-teste',
      conteudo: 'conteudo teste',
      lista: 'ToDo',
    };
    renderTheme(<Card defaultCard={defaultCard} />);

    expect(screen.getByText('titulo-teste')).toBeInTheDocument();
  });

  it('should edit a Card', async () => {
    const defaultCard = {
      id: 'uuid',
      titulo: 'titulo-teste',
      conteudo: 'conteudo teste',
      lista: 'ToDo',
    };
    renderTheme(<Card defaultCard={defaultCard} />);

    const editButton = screen.getByTestId('salvar');

    await userEvent.click(editButton);

    const input = screen.getByTestId('conteudo');

    await userEvent.click(input);
    await userEvent.keyboard(' foo');

    const saveButton = await screen.findByTestId('salvar');

    await userEvent.click(saveButton);

    expect(screen.getByTestId('conteudo')).toHaveTextContent(
      'conteudo teste foo',
    );
  });

  it('should cancelar a edit in a Card', async () => {
    const defaultCard = {
      id: 'uuid',
      titulo: 'titulo-teste',
      conteudo: 'conteudo teste',
      lista: 'ToDo',
    };
    renderTheme(<Card defaultCard={defaultCard} />);

    const editButton = screen.getByTestId('salvar');

    await userEvent.click(editButton);

    const input = screen.getByTestId('conteudo');

    await waitFor(async () => {
      await userEvent.click(input);
      await userEvent.keyboard(' foo');
    });

    const buttonCancel = screen.getByTestId('cancelar');
    await waitFor(async () => {
      await userEvent.click(buttonCancel);
    });

    expect(screen.getByTestId('conteudo')).toHaveTextContent('conteudo teste');
  });
});
