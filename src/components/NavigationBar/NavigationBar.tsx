import PrivateLinks from '@/components/PrivateLinks';
import { privateNavLinks, publicNavLinks } from '@/constants';
import { NavContainer } from './NavigationBar.styled';
import NavLinks from '../NavLinks';

const NavigationBar = () => {
  const navLinks = [...publicNavLinks, ...privateNavLinks];

  return (
    <NavContainer>
      <NavLinks navLinks={navLinks} />
      {<PrivateLinks />}
    </NavContainer>
  );
};

export default NavigationBar;
