import styled from '@emotion/styled';
import { IStyledProps } from './Container.types';

export const Wrapper = styled.div<IStyledProps>`
  position: relative;
  width: 100%;
  display: ${({ isContactsPage }) => (isContactsPage ? 'flex' : 'block')};
  gap: ${({ isContactsPage, theme }) =>
    isContactsPage ? `${theme.primaryGap}px` : 0};
  padding-left: ${({ theme }) => `${theme.padding.paddingContainer}px`};
  padding-right: ${({ theme }) => `${theme.padding.paddingContainer}px`};
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    max-width: 500px;
  }

  @media screen and (min-width: 768px) {
    width: 700px;
  }

  @media screen and (min-width: 1280px) {
    width: 1200px;
  }
`;
