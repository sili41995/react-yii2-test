import { ReactNode } from 'react';
import { BtnType, IconBtnType, Positions } from '@/constants';
import { BtnClickEvt } from '@/types/types';

export interface IProps {
  icon: ReactNode;
  onBtnClick?: (e: BtnClickEvt) => void;
  type?: BtnType;
  btnType: IconBtnType;
  position?: Positions;
  top?: number | 'center';
  right?: number;
  width?: number;
  height?: number;
  inputWrap?: boolean;
  disabled?: boolean;
  title?: string;
}

export interface IStyledProps {
  position?: Positions;
  top?: number | 'center';
  right?: number;
  width?: number;
  height?: number;
  inputWrap?: boolean;
  btnType: IconBtnType;
}
