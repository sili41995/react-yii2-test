import { FC } from 'react';
import { Menu, MenuCloseBtn } from './MobileMenuContainer.styled';
import { IconSizes, privateNavLinks, publicNavLinks } from '@/constants';
import { IoClose } from 'react-icons/io5';
import { IProps } from './MobileMenuContainer.types';
import Container from '@/components/Container';
import NavLinks from '@/components/NavLinks';
import PrivateLinks from '@/components/PrivateLinks';

const MobileMenuContainer: FC<IProps> = ({ setShowMobileMenu }) => {
  const navLinks = [...publicNavLinks, ...privateNavLinks];

  return (
    <Menu>
      <Container>
        <MenuCloseBtn type='button' onClick={setShowMobileMenu}>
          <IoClose size={IconSizes.secondaryIconSize} />
        </MenuCloseBtn>
        <NavLinks navLinks={navLinks} setShowMobileMenu={setShowMobileMenu} />
        <PrivateLinks setShowMobileMenu={setShowMobileMenu} />
      </Container>
    </Menu>
  );
};

export default MobileMenuContainer;
