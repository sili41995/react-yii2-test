import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineDelete, AiOutlineEdit, AiOutlineStar } from 'react-icons/ai';
import DefaultMessage from '@/components/DefaultMessage';
import ContactProfile from '@/components/ContactProfile';
import GoBackLink from '@/components/GoBackLink';
import IconButton from '@/components/IconButton';
import { AriaLabels, IconBtnType, IconSizes, PagePaths } from '@/constants';
import { BtnClickEvt } from '@/types/types';
import { makeBlur } from '@/utils';
import { useDeleteContact } from '@/hooks';
import { ButtonsContainer, Container, ButtonsList, Item } from './ContactDetails.styled';
import { IProps } from './ContactDetails.types';

const ContactDetails: FC<IProps> = ({ contact, updateContact, onFavoriteBtnClick, isFetchError, isLoaded }) => {
  const deleteContact = useDeleteContact();
  const [editContact, setEditContact] = useState<boolean>(false);
  const id = useParams()[PagePaths.dynamicParam];
  const favoriteBtnIcon = contact?.favorite ? <AiFillStar size={IconSizes.primaryIconSize} /> : <AiOutlineStar size={IconSizes.primaryIconSize} />;
  const isLoadedContact = isLoaded && contact;

  useEffect(() => {
    setEditContact(false);
  }, [id]);

  const onDelBtnClick = () => {
    if (id) {
      deleteContact(id);
    }
  };

  const onEditBtnClick = (e: BtnClickEvt) => {
    setEditContact((prevState) => !prevState);
    makeBlur(e.currentTarget);
  };

  return (
    <Container>
      <ButtonsContainer>
        <GoBackLink height={36} />
        {isLoadedContact && (
          <ButtonsList>
            {!editContact && (
              <>
                <Item>
                  <IconButton btnType={IconBtnType.favorite} aria-label={AriaLabels.favorite} onBtnClick={onFavoriteBtnClick} icon={favoriteBtnIcon} />
                </Item>
                <Item>
                  <IconButton btnType={IconBtnType.delete} aria-label={AriaLabels.delete} onBtnClick={onDelBtnClick} icon={<AiOutlineDelete size={IconSizes.primaryIconSize} />} />
                </Item>
              </>
            )}
            <Item>
              <IconButton btnType={IconBtnType.edit} aria-label={AriaLabels.edit} onBtnClick={onEditBtnClick} icon={<AiOutlineEdit size={IconSizes.primaryIconSize} />} />
            </Item>
          </ButtonsList>
        )}
      </ButtonsContainer>
      {isLoadedContact && <ContactProfile contact={contact} editContact={editContact} onEditBtnClick={onEditBtnClick} setContact={updateContact} />}
      {isFetchError && <DefaultMessage message='Contact is absent' />}
    </Container>
  );
};

export default ContactDetails;
