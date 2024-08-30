import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme.primaryGap}px`};
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonsList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Item = styled.li``;
