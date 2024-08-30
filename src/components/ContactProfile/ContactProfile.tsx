import { ChangeEvent, FC, Suspense, useRef, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { NavLink, Outlet } from 'react-router-dom';
import { IProps } from './ContactProfile.types';
import Loader from '@/components/Loader';
import ImageContainer from '@/components/ImageContainer';
import EditContactForm from '@/components/EditContactForm';
import { PagePaths } from '@/constants';
import { onChangeAvatar } from '@/utils';
import { IAvatar } from '@/types/types';
import { ContactDesc, ContactName, ContactTitle, ListItem, NavBar, NavList } from './ContactProfile.styled';

const ContactProfile: FC<IProps> = ({ contact, editContact, ...otherProps }) => {
  const [contactAvatar, setContactAvatar] = useState<FileList | null>(null);
  const contactAvatarRef = useRef<HTMLImageElement>(null);
  const { avatar, name, role } = contact;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setContactAvatar(e.target.files);
    onChangeAvatar({ e, ref: contactAvatarRef });
  };

  const handleFormSubmit: SubmitHandler<IAvatar> = (data) => {
    if (!contactAvatar?.length) {
      return;
    }

    console.log(data);
  };

  const onCancelBtnClick = () => {
    if (contactAvatarRef.current) {
      contactAvatarRef.current.src = avatar as string;
      setContactAvatar(null);
    }
  };

  return (
    <>
      <ImageContainer
        avatar={avatar as string}
        avatarRef={contactAvatarRef}
        updateAvatar={contactAvatar}
        handleFormSubmit={handleFormSubmit}
        onChangeInput={onChangeInput}
        onCancelBtnClick={onCancelBtnClick}
        imgSize='200'
      />
      {editContact ? (
        <EditContactForm {...otherProps} contact={contact} />
      ) : (
        <>
          <ContactTitle>
            <ContactName>{name}</ContactName>
            {role && <ContactDesc>{role}</ContactDesc>}
          </ContactTitle>
          <NavBar>
            <NavList>
              <ListItem>
                <NavLink to={PagePaths.contact}>Contact</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={PagePaths.about}>About</NavLink>
              </ListItem>
            </NavList>
          </NavBar>
          <Suspense fallback={<Loader />}>
            <Outlet context={contact} />
          </Suspense>
        </>
      )}
    </>
  );
};

export default ContactProfile;
