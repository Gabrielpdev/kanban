import * as S from './styles';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from '../../../context/theme';

export function ToggleTheme() {
  const { theme, ToggleTheme } = useTheme();

  return (
    <S.ToggleTheme>
      Toggle Theme:
      <button role="toggle-theme" onClick={ToggleTheme}>
        {theme?.title === 'light' ? (
          <>
            <BsMoon size={20} />
            Dark
          </>
        ) : (
          <>
            <BsSun size={20} />
            Light
          </>
        )}
      </button>
    </S.ToggleTheme>
  );
}
