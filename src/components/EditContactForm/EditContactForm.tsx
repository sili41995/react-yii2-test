import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { IContact } from '@/types/types';
import { IProps } from './EditContactForm.types';
import IconButton from '@/components/IconButton';
import ContactFormInputs from '@/components/ContactFormInputs';
import ModalForm from '@/components/ModalForm';
import AcceptBtn from '@/components/AcceptBtn';
import { AriaLabels, IconBtnType, IconSizes } from '@/constants/index';
import { ButtonsList, Item, Form, Title } from './EditContactForm.styled';

const EditContactForm = ({ onEditBtnClick, contact, ...otherProps }: IProps) => {
  const [checked, setChecked] = useState<boolean>(() => contact.favorite as boolean);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IContact>();

  const handleFormSubmit: SubmitHandler<IContact> = (data) => {
    console.log(data);
  };

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <ModalForm>
      <Title>Contact editing</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <ContactFormInputs register={register} errors={errors} isSubmitting={isSubmitting} contact={contact} onCheckboxChange={onCheckboxChange} checked={checked} {...otherProps} />
        <ButtonsList>
          <Item>
            <AcceptBtn />
          </Item>
          <Item>
            <IconButton btnType={IconBtnType.cancel} onBtnClick={onEditBtnClick} aria-label={AriaLabels.cancel} icon={<FaTimes size={IconSizes.primaryIconSize} />} />
          </Item>
        </ButtonsList>
      </Form>
    </ModalForm>
  );
};

export default EditContactForm;
