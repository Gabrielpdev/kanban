import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 10px;
  /* width: 230px;
  max-width: 230px; */
  min-height: 150px;

  width: 100%;

  border-radius: 10px;
  padding: 10px;
  box-shadow: 1px 2px 8px #00000080;

  background: ${({ theme }) => theme.colors.white500};
`;

export const Title = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  font-weight: bold;

  input {
    color: ${({ theme }) => theme.colors.gray500};
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray100};
    background: transparent;

    font-size: 22px;
    width: 100%;
  }
`;

export const Content = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  font-weight: bold;

  textarea {
    min-width: 200px;
    max-width: 230px;
    min-height: 200px;
    max-height: 300px;
    font-size: 14px;
    border-radius: 5px;

    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  color: ${({ theme }) => theme.colors.gray500};

  button {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;

    color: #fff;
    background: ${({ theme }) => theme.colors.green500};
    border: none;
  }
`;
