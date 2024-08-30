import styled from '@emotion/styled';

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.otherColor};

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding-top: ${({ theme }) => theme.spacing(20)};
    padding-bottom: ${({ theme }) => theme.spacing(20)};
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MenuCloseBtn = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.padding.paddingContainer}px;
  border: none;
  padding: ${({ theme }) => theme.spacing()};
  background-color: transparent;

  & > svg {
    display: block;
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;
