import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/SharedLayout';
import { PagePaths } from '@/constants';

const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const SignInPage = lazy(() => import('@/pages/SignInPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactsPage = lazy(() => import('@/pages/ContactsPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const ContactInfo = lazy(() => import('@/components/ContactInfo'));
const AddContactPage = lazy(() => import('@/pages/AddContactPage'));
const ContactDetailsPage = lazy(() => import('@/pages/ContactDetailsPage'));
const ContactDescription = lazy(() => import('@/components/ContactDescription'));

const App = () => (
  <Routes>
    <Route path={PagePaths.home} element={<SharedLayout />}>
      <Route index element={<SignInPage />} />
      <Route path={PagePaths.signIn} element={<SignInPage />} />
      <Route path={PagePaths.signUp} element={<SignUpPage />} />
      <Route path={PagePaths.about} element={<AboutPage />} />
      <Route path={PagePaths.profile} element={<ProfilePage />} />
      <Route path={PagePaths.contacts} element={<ContactsPage />} />
      <Route path={PagePaths.newContact} element={<AddContactPage />} />
      <Route path={`${PagePaths.contacts}/:${PagePaths.dynamicParam}`} element={<ContactDetailsPage />}>
        <Route path={PagePaths.contact} element={<ContactInfo />} />
        <Route path={PagePaths.about} element={<ContactDescription />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default App;
