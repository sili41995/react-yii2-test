import { FC } from 'react';
import { IProps } from './Container.types';
import { Wrapper } from './Container.styled';

const Container: FC<IProps> = ({ children, isContactsPage }) => (
  <Wrapper isContactsPage={isContactsPage}>{children}</Wrapper>
);

export default Container;
