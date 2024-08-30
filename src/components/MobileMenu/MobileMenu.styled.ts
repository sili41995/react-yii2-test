import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MenuOpenBtn = styled.button`
  border: none;
  padding: ${({ theme }) => theme.spacing()};
  background-color: transparent;

  & > svg {
    display: block;
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;
