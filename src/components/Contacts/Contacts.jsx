import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { Ul, Li } from './Contacts.styled';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  console.log(typeof contacts);
  console.log(contacts);
  console.log(typeof filter);
  const getFilteredContacts = () => {
    const normalaizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Ul>
      {filteredContacts.map(contact => {
        return (
          <Li key={contact.id}>
            <ContactItem
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </Li>
        );
      })}
    </Ul>
  );
};
