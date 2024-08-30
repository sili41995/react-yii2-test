import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import Loader from '@/components/Loader';
import { getIsContactsPage, setAuthPageBackgroundColor } from '@/utils';
import { Header, Main, Section } from './SharedLayout.styled';
import MobileMenu from '@/components/MobileMenu';
import Container from '@/components/Container';

const SharedLayout = () => {
  const { pathname } = useLocation();
  const isContactsPage = getIsContactsPage(pathname);

  setAuthPageBackgroundColor(pathname);

  return (
    <>
      <Header>
        <Container>
          <NavigationBar />
          <MobileMenu />
        </Container>
      </Header>
      <Main>
        <Section>
          <Container isContactsPage={isContactsPage}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </Main>
    </>
  );
};
export default SharedLayout;
