import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: auto;
  gap: 30px;
  margin: auto;

  width: 100%;
  height: 100vh;

  max-width: 1420px;

  padding: 1rem;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  overflow: auto;
  width: 100%;

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 60px;

  font-size: 52px;
`;
