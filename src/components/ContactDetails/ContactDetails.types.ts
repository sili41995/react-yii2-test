import { BtnClickEvt, IContact } from '@/types/types';

export interface IProps {
  contact: IContact | null;
  updateContact: (data: IContact) => void;
  onFavoriteBtnClick: (e: BtnClickEvt) => void;
  isFetchError: boolean;
  isLoaded: boolean;
}
