import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      invert: string;
      red500: string;
      blue200: string;
      blue500: string;
      white200: string;
      white400: string;
      white500: string;
      green500: string;
      gray100: string;
      gray150: string;
      gray300: string;
      gray400: string;
      gray500: string;
      yellow500: string;
    };
  }
}
