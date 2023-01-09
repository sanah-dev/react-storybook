import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({label, type, required, state, borderColor}) => {
  const mode = required ? '필수입력' : '';
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        className={['input', `input-${state}`, mode].join(' ')}
        style={borderColor && {borderColor}}
      />
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  state: PropTypes.oneOf(['error', 'approve', 'hold']),
  borderColor: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  type: 'text',
  required: false,
  state: 'approve',
  borderColor: null,
};
