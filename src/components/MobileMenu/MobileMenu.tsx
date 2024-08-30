import { FC, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Container, MenuOpenBtn } from './MobileMenu.styled';
import { IconSizes } from '@/constants';
import MobileMenuContainer from '@/components/MobileMenuContainer';
import Filter from '@/components/Filter';
import { useLocation } from 'react-router-dom';
import { getIsContactsPage } from '@/utils';
import { useAppSelector } from '@/hooks/redux';
import { selectContacts } from '@/redux/contacts/selectors';

const MobileMenu: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const contacts = useAppSelector(selectContacts);
  const { pathname } = useLocation();
  const isContactsPage = getIsContactsPage(pathname);
  const showFilter = isContactsPage && Boolean(contacts.length);

  const setShowMobileMenuState = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <Container>
      {showFilter && <Filter />}
      <MenuOpenBtn type='button' onClick={setShowMobileMenuState}>
        <FaBars size={IconSizes.secondaryIconSize} />
      </MenuOpenBtn>
      {showMobileMenu && (
        <MobileMenuContainer setShowMobileMenu={setShowMobileMenuState} />
      )}
    </Container>
  );
};

export default MobileMenu;
