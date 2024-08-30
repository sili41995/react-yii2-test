import { ChangeEvent, FC, useRef, useState } from 'react';
import { SlPhone, SlEvent, SlLocationPin } from 'react-icons/sl';
import { SubmitHandler } from 'react-hook-form';
import { IconSizes } from '@/constants';
import { IAvatar } from '@/types/types';
import ImageContainer from '@/components/ImageContainer';
import { IProps } from './UserProfile.types';
import { InfoList, Email, FullName, Name, InfoItem, UserData, ContactInfoIconWrap, Container } from './UserProfile.styled';

const UserProfile: FC<IProps> = ({ user }) => {
  const [userAvatar, setUserAvatar] = useState<FileList | null>(null);
  const userAvatarRef = useRef<HTMLImageElement>(null);

  const { name, avatar, email, phone, location, lastName, dateOfBirth } = user;
  const fullName = lastName ? `${name} ${lastName}` : name;
  const userDateOfBirth = dateOfBirth && new Date(dateOfBirth).toLocaleDateString();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const handleFormSubmit: SubmitHandler<IAvatar> = (data) => {
    console.log(data);
  };

  const onCancelBtnClick = () => {
    if (userAvatarRef.current) {
      userAvatarRef.current.src = avatar;
      setUserAvatar(null);
    }
  };

  return (
    <Container>
      <Name>{name}</Name>
      <UserData>
        <ImageContainer
          avatar={avatar as string}
          avatarRef={userAvatarRef}
          updateAvatar={userAvatar}
          handleFormSubmit={handleFormSubmit}
          onChangeInput={onChangeInput}
          onCancelBtnClick={onCancelBtnClick}
          imgSize='150'
        />
        <FullName>{fullName}</FullName>
        <Email>{email}</Email>
      </UserData>
      {(phone || dateOfBirth || location) && (
        <InfoList>
          {dateOfBirth && (
            <InfoItem>
              <ContactInfoIconWrap>
                <SlEvent size={IconSizes.secondaryIconSize} />
              </ContactInfoIconWrap>
              <p>{userDateOfBirth}</p>
            </InfoItem>
          )}
          {phone && (
            <InfoItem>
              <ContactInfoIconWrap>
                <SlPhone size={IconSizes.secondaryIconSize} />
              </ContactInfoIconWrap>
              <p>{phone}</p>
            </InfoItem>
          )}
          {location && (
            <InfoItem>
              <ContactInfoIconWrap>
                <SlLocationPin size={IconSizes.secondaryIconSize} />
              </ContactInfoIconWrap>
              <p>{location}</p>
            </InfoItem>
          )}
        </InfoList>
      )}
    </Container>
  );
};

export default UserProfile;
