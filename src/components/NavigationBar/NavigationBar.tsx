import PrivateLinks from '@/components/PrivateLinks';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { useAppSelector } from '@/hooks/redux';
import { authNavLinks, privateNavLinks, publicNavLinks } from '@/constants';
import { NavContainer } from './NavigationBar.styled';
import NavLinks from '../NavLinks';

const NavigationBar = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const navLinks = isLoggedIn
    ? [...publicNavLinks, ...privateNavLinks]
    : publicNavLinks;

  return (
    <NavContainer>
      <NavLinks navLinks={navLinks} />
      {isLoggedIn ? <PrivateLinks /> : <NavLinks navLinks={authNavLinks} />}
    </NavContainer>
  );
};

export default NavigationBar;
