import styled from 'styled-components';

interface IGroup {
  typeData: string;
}

export const Group = styled.div<IGroup>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  min-width: 250px;

  border-radius: 10px;
  border-top: 3px solid;
  border-top-color: ${({ theme, typeData }) => {
    if (typeData === 'To Do') {
      return theme.colors.white200;
    }

    if (typeData === 'Doing') {
      return theme.colors.yellow500;
    }

    if (typeData === 'Done') {
      return theme.colors.green500;
    }

    if (typeData === 'New') {
      return theme.colors.gray500;
    }

    return 'none';
  }};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white500};
  box-shadow: 1px 2px 8px #00000030;

  width: 100%;

  border-radius: 10px;
  padding: 10px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.gray500};

  font-size: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px auto;
  border: none;
  background: transparent;

  font-size: 20px;
`;

export const Body = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  max-height: calc(100vh - 100px);
  overflow: auto;

  width: 100%;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  width: 100%;

  > div {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: red;

  width: 300px;
  height: 150px;

  width: 100%;

  border-radius: 10px;
  padding: 10px;
`;
