import { FC } from 'react';
import IconButton from '../IconButton';
import { IconBtnType, IconSizes, PagePaths } from '@/constants';
import { SlLogout } from 'react-icons/sl';
import { BtnClickEvt } from '@/types/types';
import { makeBlur, toasts } from '@/utils';
import { useAppDispatch } from '@/hooks/redux';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '@/redux/auth/operations';
import { IProps } from './SignOutBtn.types';

const SignOutBtn: FC<IProps> = ({ setShowMobileMenu }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogoutBtnClick = (e: BtnClickEvt) => {
    makeBlur(e.currentTarget);
    dispatch(signOutUser())
      .unwrap()
      .then(() => {
        toasts.successToast('Goodbye!');
        setShowMobileMenu && setShowMobileMenu();
        navigate(PagePaths.home);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  return (
    <IconButton
      btnType={IconBtnType.logout}
      onBtnClick={onLogoutBtnClick}
      icon={<SlLogout size={IconSizes.otherIconSize} />}
      title='Sign Out'
    />
  );
};

export default SignOutBtn;
