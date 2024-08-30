import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { PagePaths } from '@/constants';
import { IProps } from './GoBackLink.types';
import { StyledLink } from './GoBackLink.styled';

const GoBackLink: FC<IProps> = ({ title = 'Go Back', height }) => {
  const { search } = useLocation();

  return (
    <StyledLink height={height} to={`/${PagePaths.contacts}${search}`}>
      {title}
    </StyledLink>
  );
};

export default GoBackLink;
