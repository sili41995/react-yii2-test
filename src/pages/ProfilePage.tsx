import UserProfile from '@/components/UserProfile';
import { FC, useEffect, useState } from 'react';
import { ICurrentUser } from '@/types/types';
import contactsServiceApi from '@/service/contactsServiceApi';
import { toasts } from '@/utils';
import { FetchStatuses } from '@/constants';
import Loader from '@/components/Loader';

const ProfilePage: FC = () => {
  const [fetchUserStatus, setFetchUserStatus] = useState<FetchStatuses>(
    () => FetchStatuses.idle
  );
  const [user, setUser] = useState<ICurrentUser | null>(null);
  const isLoadingUser = fetchUserStatus === FetchStatuses.pending;

  useEffect(() => {
    const getUser = async () => {
      setFetchUserStatus(FetchStatuses.pending);
      try {
        const user = await contactsServiceApi.refreshUser();
        setUser(user);
        setFetchUserStatus(FetchStatuses.resolved);
      } catch (error) {
        if (error instanceof Error) {
          toasts.errorToast(error.message);
          setFetchUserStatus(FetchStatuses.rejected);
        }
      }
    };

    getUser();
  }, []);

  return isLoadingUser ? <Loader /> : user && <UserProfile user={user} />;
};

export default ProfilePage;
