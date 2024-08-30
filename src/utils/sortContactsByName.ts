import { SortTypes } from '@/constants';
import { IContact } from '@/types/types';

const sortContactsByName = (
  contacts: IContact[],
  sortType: string
): IContact[] => {
  return [...contacts].sort(({ name: prevContact }, { name: nextContact }) =>
    sortType === SortTypes.desc
      ? nextContact.localeCompare(prevContact)
      : prevContact.localeCompare(nextContact)
  );
};

export default sortContactsByName;
