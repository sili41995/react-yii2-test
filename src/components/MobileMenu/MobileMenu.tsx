import { FC, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Container, MenuOpenBtn } from './MobileMenu.styled';
import { IconSizes } from '@/constants';
import MobileMenuContainer from '@/components/MobileMenuContainer';
import Filter from '@/components/Filter';
import { useLocation } from 'react-router-dom';
import { getIsContactsPage } from '@/utils';

const MobileMenu: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const { pathname } = useLocation();
  const isContactsPage = getIsContactsPage(pathname);
  const showFilter = isContactsPage;

  const setShowMobileMenuState = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <Container>
      {showFilter && <Filter />}
      <MenuOpenBtn type='button' onClick={setShowMobileMenuState}>
        <FaBars size={IconSizes.secondaryIconSize} />
      </MenuOpenBtn>
      {showMobileMenu && <MobileMenuContainer setShowMobileMenu={setShowMobileMenuState} />}
    </Container>
  );
};

export default MobileMenu;
