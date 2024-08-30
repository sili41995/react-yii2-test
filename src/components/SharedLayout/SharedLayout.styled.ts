import styled from '@emotion/styled';

export const Header = styled.header`
  display: inline-block;
  min-width: 100%;
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.otherColor};
`;

export const Main = styled.main``;

export const Section = styled.section`
  padding-top: ${({ theme }) => `${theme.padding.paddingContainer}px`};
  padding-bottom: ${({ theme }) => `${theme.padding.paddingContainer}px`};
`;
