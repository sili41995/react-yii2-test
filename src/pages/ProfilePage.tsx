import UserProfile from '@/components/UserProfile';
import { FC, useState } from 'react';
import { ICurrentUser } from '@/types/types';
import { FetchStatuses } from '@/constants';
import Loader from '@/components/Loader';

const ProfilePage: FC = () => {
  const [fetchUserStatus] = useState<FetchStatuses>(() => FetchStatuses.idle);
  const [user] = useState<ICurrentUser | null>(null);
  const isLoadingUser = fetchUserStatus === FetchStatuses.pending;

  return isLoadingUser ? <Loader /> : user && <UserProfile user={user} />;
};

export default ProfilePage;
