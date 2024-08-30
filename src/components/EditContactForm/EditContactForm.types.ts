import { BtnClickEvt, IContact } from '@/types/types';

export interface IProps {
  contact: IContact;
  setContact: (data: IContact) => void;
  onEditBtnClick: (e: BtnClickEvt) => void;
}
