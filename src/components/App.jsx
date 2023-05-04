import { Wrap } from './Wrap/Wrap';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { TitleH1, TitleH2 } from './Wrap/Wrap.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Wrap>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm />
        <TitleH2>Contacts</TitleH2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <Contacts />
        <Toaster
          toastOptions={{
            style: {
              border: '2px solid #72b372',
              padding: '15px',
              marginTop: '30px',
            },
          }}
        />
      </Wrap>
    </>
  );
};
