import { useLocation } from 'react-router-dom';
import { SlPlus } from 'react-icons/sl';
import Filter from '@/components/Filter';
import LinkWithQuery from '@/components/LinkWithQuery';
import { getIsContactsPage } from '@/utils';
import { selectContacts } from '@/redux/contacts/selectors';
import { useAppSelector } from '@/hooks/redux';
import { PagePaths } from '@/constants';
import { BtnTitle, LinkContainer } from './PrivateLinks.styled';
import SignOutBtn from '../SignOutBtn';
import { FC } from 'react';
import { IProps } from './PrivateLinks.types';

const PrivateLinks: FC<IProps> = ({ setShowMobileMenu }) => {
  const contacts = useAppSelector(selectContacts);
  const { pathname } = useLocation();
  const isContactsPage = getIsContactsPage(pathname);
  const showFilter = isContactsPage && Boolean(contacts.length);
  const addNewContactPath = `/${PagePaths.newContact}`;

  return (
    <LinkContainer>
      {showFilter && <Filter />}
      <LinkWithQuery to={addNewContactPath} onClick={setShowMobileMenu}>
        <SlPlus />
        <BtnTitle>New Contact</BtnTitle>
      </LinkWithQuery>
      <SignOutBtn setShowMobileMenu={setShowMobileMenu} />
    </LinkContainer>
  );
};

export default PrivateLinks;
