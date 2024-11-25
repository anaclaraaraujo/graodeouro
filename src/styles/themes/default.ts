import { css } from 'styled-components';

export const defaultTheme = {
  colors: {
    white: '#FFF',

    'gray-100': '#FAFAFA',
    'gray-300': '#F3F2F2',
    'gray-400': '#EDEDED',
    'gray-500': '#E6E5E5',
    'gray-600': '#D7D5D5',
    'gray-700': '#8D8686',
    'gray-800': '#574F4D',
    'gray-900': '#403937',
    'gray-950': '#272221',

    'yellow-300': '#F1E9C9',
    'yellow-500': '#DBAC2C',
    'yellow-700': '#C47F17',

    'purple-300': '#EBE5F9',
    'purple-500': '#8047F8',
    'purple-700': '#4B2995',
  },
  font: {
    roboto: "'Roboto', sans-serif",
    baloo: "'Baloo 2', sans-serif"
  },
  fonts: {
    titleXL: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      line-height: 130%;
      font-weight: 800;
    `,

    titleL: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      line-height: 130%;
      font-weight: 800;
    `,

    titleM: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 800;
    `,

    titleS: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 700;
    `,

    titleXS: css`
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.125rem;
      line-height: 130%;
      font-weight: 700;
    `,

    textL: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 400;
    `,

    textM: css`
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;
    `,

    textS: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
    `,

    textXS: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      line-height: 130%;
      font-weight: 700;
    `,

    tag: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.625rem;
      line-height: 130%;
      font-weight: 700;
    `,

    buttonG: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 700;
    `,

    buttonM: css`
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: 400;
    `,
  },
}