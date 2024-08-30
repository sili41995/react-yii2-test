import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.primaryGap}px;

  @media screen and (max-width: 1279px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ListItem = styled.li`
  & a {
    display: block;
    padding: ${({ theme }) => theme.spacing(3)};
    border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    font-family: Inter;
    font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
    font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
    text-align: center;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc},
      background-color ${({ theme }) => theme.transitionDurationAndFunc};

    &:hover,
    &:focus,
    &.active {
      color: ${({ theme }) => theme.colors.otherColor};
      background-color: ${({ theme }) => theme.colors.whiteColor};
    }

    @media screen and (min-width: 1280px) {
      width: 100px;
    }
  }
`;
