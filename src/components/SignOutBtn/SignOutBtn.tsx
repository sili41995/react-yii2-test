import { FC } from 'react';
import IconButton from '../IconButton';
import { IconBtnType, IconSizes } from '@/constants';
import { SlLogout } from 'react-icons/sl';
import { BtnClickEvt } from '@/types/types';
import { IProps } from './SignOutBtn.types';

const SignOutBtn: FC<IProps> = () => {
  const onLogoutBtnClick = (e: BtnClickEvt) => {
    console.log(e);
  };

  return <IconButton btnType={IconBtnType.logout} onBtnClick={onLogoutBtnClick} icon={<SlLogout size={IconSizes.otherIconSize} />} title='Sign Out' />;
};

export default SignOutBtn;
