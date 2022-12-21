import React from 'react';
import * as S from './styles';

export interface SpinnerProps {
  size: 'sm' | 'md' | 'lg';
}

export const Spinner = ({ size }: SpinnerProps) => {
  return <S.Wrapper size={size} role="Spinner" />;
};
