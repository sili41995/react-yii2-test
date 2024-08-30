import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isContactsPage?: boolean;
}

export interface IStyledProps {
  isContactsPage?: boolean;
}
