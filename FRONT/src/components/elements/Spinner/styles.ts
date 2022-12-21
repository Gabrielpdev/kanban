import styled, { keyframes } from 'styled-components';

interface WrapperProps {
  size: string;
}

const rotate = keyframes({
  '100%': { transform: 'rotate(360deg)' },
});

export const Wrapper = styled.main<WrapperProps>`
  border-radius: 50%;
  opacity: 1;
  z-index: 100000;
  margin: 7.5px 0;

  transition: opacity 200ms;
  animation: ${rotate} 1s linear;
  animation-iteration-count: infinite;
  transition-delay: 200ms;
  border-top-color: white;

  border-top-color: ${({ theme }) => theme.colors.white500} !important;
  border-color: ${({ theme }) => theme.colors.gray400};

  ${({ size }) => {
    if (size === 'sm') {
      return {
        width: '16px',
        height: '16px',
        border: '4px solid',
      };
    }

    if (size === 'md') {
      return {
        width: '32px',
        height: '32px',
        border: '4px solid ',
      };
    }

    if (size === 'lg') {
      return {
        width: '64px',
        height: '64px',
        border: '10px solid ',
      };
    }
  }}
`;
