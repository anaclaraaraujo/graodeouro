import styled from 'styled-components';

export const LayoutContainer = styled.div`
  background: ${({ theme }) => theme['gray-100']};

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;