import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${({ theme }) => `${theme.primaryGap}px`};
`;
