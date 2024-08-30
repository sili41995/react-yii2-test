import ContactDetails from '@/components/ContactDetails';
import Loader from '@/components/Loader';
import { FetchStatuses } from '@/constants';
import { BtnClickEvt, IContact } from '@/types/types';
import { FC, useState } from 'react';

const ContactDetailsPage: FC = () => {
  const [contact, setContact] = useState<IContact | null>(null);
  const [fetchContactStatus] = useState<FetchStatuses>(() => FetchStatuses.idle);
  const isLoading = fetchContactStatus === FetchStatuses.pending;
  const isFetchError = fetchContactStatus === FetchStatuses.rejected;
  const isLoaded = fetchContactStatus === FetchStatuses.resolved;

  const updateContact = (data: IContact): void => {
    setContact(data);
  };

  const onFavoriteBtnClick = (e: BtnClickEvt) => {
    console.log(e);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <ContactDetails contact={contact} updateContact={updateContact} onFavoriteBtnClick={onFavoriteBtnClick} isFetchError={isFetchError} isLoaded={isLoaded} />
    </>
  );
};

export default ContactDetailsPage;
