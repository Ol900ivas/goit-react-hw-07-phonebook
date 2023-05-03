import PropTypes from 'prop-types';
import { GeneralWrap } from './Wrap.styled';

export const Wrap = ({ children }) => {
  return <GeneralWrap>{children}</GeneralWrap>;
};

Wrap.propTypes = {
  children: PropTypes.node.isRequired,
};
