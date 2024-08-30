import { ChangeEvent, FC, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputTypes } from '@/constants';
import { onChangeAvatar } from '@/utils';
import { IContact } from '@/types/types';
import ContactFormInputs from '@/components/ContactFormInputs';
import ModalForm from '@/components/ModalForm';
import Input from '@/components/Input';
import GoBackLink from '@/components/GoBackLink';
import AcceptBtn from '@/components/AcceptBtn';
import image from '@/images/default-profile-avatar.png';
import { ButtonsList, Item, Form, Title, Image } from './AddContactForm.styled';

const AddContactForm: FC = () => {
  const contactAvatarRef = useRef<HTMLImageElement>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IContact>();

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    onChangeAvatar({ e, ref: contactAvatarRef });
  };

  const handleFormSubmit: SubmitHandler<IContact> = (data) => {
    console.log(data);
  };

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <ModalForm>
      <Title>Add contact</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('avatar') }}
          accept='image/png, image/jpeg, image/jpg'
          onChange={onChangeFile}
          type={InputTypes.file}
          altElem={<Image src={image} alt='profile avatar' width='150' height='150' ref={contactAvatarRef} />}
        />
        <ContactFormInputs register={register} errors={errors} isSubmitting={isSubmitting} onCheckboxChange={onCheckboxChange} checked={checked} />
        <ButtonsList>
          <Item>
            <AcceptBtn />
          </Item>
          <Item>
            <GoBackLink />
          </Item>
        </ButtonsList>
      </Form>
    </ModalForm>
  );
};

export default AddContactForm;
