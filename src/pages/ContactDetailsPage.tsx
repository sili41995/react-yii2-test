import ContactDetails from '@/components/ContactDetails';
import Loader from '@/components/Loader';
import { FetchStatuses, PagePaths } from '@/constants';
import { useAppDispatch } from '@/hooks/redux';
import { updateContactStatus } from '@/redux/contacts/operations';
import contactsServiceApi from '@/service/contactsServiceApi';
import { BtnClickEvt, IContact } from '@/types/types';
import { makeBlur, toasts } from '@/utils';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ContactDetailsPage: FC = () => {
  const [contact, setContact] = useState<IContact | null>(null);
  const [fetchContactStatus, setFetchContactStatus] = useState<FetchStatuses>(
    () => FetchStatuses.idle
  );
  const id = useParams()[PagePaths.dynamicParam];
  const dispatch = useAppDispatch();
  const isLoading = fetchContactStatus === FetchStatuses.pending;
  const isFetchError = fetchContactStatus === FetchStatuses.rejected;
  const isLoaded = fetchContactStatus === FetchStatuses.resolved;

  useEffect(() => {
    const controller = new AbortController();

    const getContact = async (id: string) => {
      setFetchContactStatus(FetchStatuses.pending);
      try {
        const contact = await contactsServiceApi.fetchContactById({
          id,
          signal: controller.signal,
        });
        setContact(contact);
        setFetchContactStatus(FetchStatuses.resolved);
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          toasts.errorToast(error.message);
          setFetchContactStatus(FetchStatuses.rejected);
        }
      }
    };

    id && getContact(id);

    return () => {
      controller.abort();
    };
  }, [id]);

  const updateContact = (data: IContact): void => {
    setContact(data);
  };

  const onFavoriteBtnClick = (e: BtnClickEvt) => {
    makeBlur(e.currentTarget);

    if (!contact?._id) return;

    const { favorite, _id: id } = contact;
    const data = { favorite: !favorite };
    dispatch(updateContactStatus({ data, id }))
      .unwrap()
      .then(() => {
        toasts.successToast('Contact status updated successfully');
        setContact(
          (prevState) =>
            ({ ...prevState, favorite: !prevState?.favorite } as IContact)
        );
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <ContactDetails
        contact={contact}
        updateContact={updateContact}
        onFavoriteBtnClick={onFavoriteBtnClick}
        isFetchError={isFetchError}
        isLoaded={isLoaded}
      />
    </>
  );
};

export default ContactDetailsPage;
