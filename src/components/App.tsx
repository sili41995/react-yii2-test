import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from '@/components/PublicRoute';
import Loader from '@/components/Loader';
import SharedLayout from '@/components/SharedLayout';
import { selectIsRefreshing, selectToken } from '@/redux/auth/selectors';
import { refreshUser } from '@/redux/auth/operations';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
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
const ContactDescription = lazy(
  () => import('@/components/ContactDescription')
);
const PrivateRoute = lazy(() => import('@/components/PrivateRoute'));

const App = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (!token) {
      return;
    }

    dispatch(refreshUser());
  }, [dispatch, token]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={PagePaths.home} element={<SharedLayout />}>
        <Route
          index
          element={<PublicRoute restricted element={<SignInPage />} />}
        />
        <Route
          path={PagePaths.signIn}
          element={<PublicRoute restricted element={<SignInPage />} />}
        />
        <Route
          path={PagePaths.signUp}
          element={<PublicRoute restricted element={<SignUpPage />} />}
        />
        <Route
          path={PagePaths.about}
          element={<PublicRoute element={<AboutPage />} />}
        />
        <Route
          path={PagePaths.profile}
          element={<PublicRoute element={<ProfilePage />} />}
        />
        <Route
          path={PagePaths.contacts}
          element={<PrivateRoute element={<ContactsPage />} />}
        />
        <Route path={PagePaths.newContact} element={<AddContactPage />} />
        <Route
          path={`${PagePaths.contacts}/:${PagePaths.dynamicParam}`}
          element={<ContactDetailsPage />}
        >
          <Route path={PagePaths.contact} element={<ContactInfo />} />
          <Route path={PagePaths.about} element={<ContactDescription />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
