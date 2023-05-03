import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { RxCross2 } from 'react-icons/rx';

import { Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <Button onClick={handleClick}>
        <RxCross2 size="20px" />
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
