import { useEffect, useState } from 'react';
import { getSettings } from '../../api';

const initialData = {
  location: '',
  phone: '',
  email: '',
  pressCenterPhone: '',
  pressCenterEmail: '',
  about_part1: '',
  about_part2: '',
};

const useContacts = (lang: string) => {
  const [contacts, setContacts] = useState(initialData);

  console.log(contacts);
  const fetchContactsData = async (): Promise<void> => {
    try {
      const data = await getSettings(lang);
      if (!data) throw new Error('could not fetch the data from that resource');
      const { about, address, phone, email, pressCenter } = data[0].contacts;
      setContacts({
        ...contacts,
        location: address,
        phone,
        email,
        pressCenterPhone: pressCenter.phone,
        pressCenterEmail: pressCenter.email,
        about_part1: about[0][0].children[0].text,
        about_part2: about[0][1].children[0].text,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContactsData();
  }, [lang]);

  return { contacts };
};

export default useContacts;
