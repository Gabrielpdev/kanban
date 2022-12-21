import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  gap: 5px;

  min-height: 150px;

  width: 100%;

  background: ${({ theme }) => theme.colors.white500};
  border-radius: 10px;
  padding: 10px;
  box-shadow: 1px 2px 8px #00000080;

  &:hover {
    div:last-child {
      opacity: 1;
    }
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  color: ${({ theme }) => theme.colors.gray500};

  font-size: 24px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  max-height: 200px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* -webkit-line-clamp: 6; */
  -webkit-box-orient: vertical;

  color: ${({ theme }) => theme.colors.gray500};

  font-size: 12px;
`;

export const LabelTitle = styled.label`
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
    max-width: 230px;
  }
`;

export const LabelContent = styled.label`
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
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: auto;

  width: 100%;

  color: ${({ theme }) => theme.colors.gray500};

  transition: 0.5s ease;
  opacity: 0;

  button {
    border: none;
    /* width: 50px; */
  }
`;

export const Delete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  color: #fff;
  background: ${({ theme }) => theme.colors.red500};
  padding: 5px;
  border-radius: 10px;

  font-size: 10px;
`;

export const Edit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  color: #000;
  background: ${({ theme }) => theme.colors.yellow500};
  padding: 5px;
  border-radius: 10px;

  font-size: 10px;
`;

export const Arrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  color: ${({ theme }) => theme.colors.gray500};
  width: max-content !important;
`;
