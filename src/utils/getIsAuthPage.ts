import { PagePaths } from '@/constants';

const getIsAuthPage = (path: string): boolean =>
  [PagePaths.home, `/${PagePaths.signIn}`, `/${PagePaths.signUp}`].includes(
    path
  );

export default getIsAuthPage;
