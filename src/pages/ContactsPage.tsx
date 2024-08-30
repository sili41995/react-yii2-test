import { FC, useEffect } from 'react';
import Loader from '@/components/Loader';
import ContactsContainer from '@/components/ContactsContainer';
import { selectIsLoaded } from '@/redux/contacts/selectors';
import { fetchContacts } from '@/redux/contacts/operations';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

const ContactsPage: FC = () => {
  const dispatch = useAppDispatch();
  const isLoadedContacts = useAppSelector(selectIsLoaded);
  const isLoading = !isLoadedContacts;

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return isLoading ? <Loader /> : <ContactsContainer quantity={6} />;
};

export default ContactsPage;
