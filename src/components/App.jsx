import { Wrap } from './Wrap/Wrap';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { TitleH1, TitleH2 } from './Wrap/Wrap.styled';

export const App = () => {
  return (
    <>
      <Wrap>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm />
        <TitleH2>Contacts</TitleH2>
        <Filter />
        <Contacts />
      </Wrap>
    </>
  );
};
