import { useEffect, useState } from 'react';

const useDeleteContact = () => {
  const [contactId, setContactId] = useState<string | null>(null);

  useEffect(() => {
    if (contactId) {
      console.log(contactId);
    }
  }, [contactId]);

  return setContactId;
};

export default useDeleteContact;
