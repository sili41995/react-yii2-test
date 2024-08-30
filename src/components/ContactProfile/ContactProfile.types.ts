import { BtnClickEvt, IContact } from '@/types/types';

export interface IProps {
  contact: IContact;
  editContact: boolean;
  setContact: (data: IContact) => void;
  onEditBtnClick: (e: BtnClickEvt) => void;
}
