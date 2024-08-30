import { NavLinks } from '@/types/types';
import PagePaths from './pagePaths';

const authNavLinks: NavLinks = [
  {
    href: `/${PagePaths.signUp}`,
    title: 'Sign up',
  },
  {
    href: `/${PagePaths.signIn}`,
    title: 'Sign in',
  },
];

export default authNavLinks;
