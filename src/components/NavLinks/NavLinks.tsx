import { FC } from 'react';
import { List, ListItem } from './NavLinks.styled';
import { IProps } from './NavLinks.types';
import { NavLink } from 'react-router-dom';

const NavLinks: FC<IProps> = ({ navLinks, setShowMobileMenu }) => (
  <List>
    {navLinks.map(({ href, title }) => (
      <ListItem key={href}>
        <NavLink to={href} onClick={setShowMobileMenu}>
          {title}
        </NavLink>
      </ListItem>
    ))}
  </List>
);

export default NavLinks;
