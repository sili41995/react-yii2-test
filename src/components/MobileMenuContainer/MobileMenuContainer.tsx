import { FC } from 'react';
import { Menu, MenuCloseBtn } from './MobileMenuContainer.styled';
import {
  IconSizes,
  authNavLinks,
  privateNavLinks,
  publicNavLinks,
} from '@/constants';
import { IoClose } from 'react-icons/io5';
import { IProps } from './MobileMenuContainer.types';
import Container from '@/components/Container';
import NavLinks from '@/components/NavLinks';
import { useAppSelector } from '@/hooks/redux';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import PrivateLinks from '@/components/PrivateLinks';

const MobileMenuContainer: FC<IProps> = ({ setShowMobileMenu }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const navLinks = isLoggedIn
    ? [...publicNavLinks, ...privateNavLinks]
    : publicNavLinks;

  return (
    <Menu>
      <Container>
        <MenuCloseBtn type='button' onClick={setShowMobileMenu}>
          <IoClose size={IconSizes.secondaryIconSize} />
        </MenuCloseBtn>
        <NavLinks navLinks={navLinks} setShowMobileMenu={setShowMobileMenu} />
        {isLoggedIn ? (
          <PrivateLinks setShowMobileMenu={setShowMobileMenu} />
        ) : (
          <NavLinks
            navLinks={authNavLinks}
            setShowMobileMenu={setShowMobileMenu}
          />
        )}
      </Container>
    </Menu>
  );
};

export default MobileMenuContainer;
