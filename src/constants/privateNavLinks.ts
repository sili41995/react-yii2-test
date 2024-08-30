import { NavLinks } from '@/types/types';
import PagePaths from './pagePaths';

const privateNavLinks: NavLinks = [
  {
    href: `/${PagePaths.contacts}`,
    title: 'Contacts',
  },
  {
    href: `/${PagePaths.profile}`,
    title: 'Profile',
  },
];

export default privateNavLinks;
