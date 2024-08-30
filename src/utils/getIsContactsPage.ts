import { PagePaths } from '@/constants';

const getIsContactsPage = (path: string): boolean =>
  path.includes(PagePaths.contacts);

export default getIsContactsPage;
