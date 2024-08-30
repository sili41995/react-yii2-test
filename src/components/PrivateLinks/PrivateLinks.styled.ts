import styled from '@emotion/styled';

export const LinkContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => `${theme.primaryGap}px`};

  & a {
    display: flex;
    gap: ${({ theme }) => theme.spacing(3)};
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    border-radius: ${({ theme }) =>
      `${theme.borderRadius.primaryBorderRadius}px`};
    background-color: ${({ theme }) => theme.colors.otherLinkColor};
    padding: ${({ theme }) => theme.spacing(3)};
    color: ${({ theme }) => theme.colors.primaryFontColor};
    font-family: Inter;
    font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
    font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
    transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    }
  }

  @media screen and (max-width: 1279px) {
    flex-direction: column;
    width: 100%;

    & > div {
      display: none;
    }
  }
`;

export const BtnTitle = styled.span``;
