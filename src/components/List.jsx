import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

export const List = ({type, title}) => {
  const mode = title ? 'title-bold' : '';
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name) => <li>{name}</li>);
  return (
    <>
      <div className="list-wrap">
        <p className={[mode].join(' ')}>리스트</p>
        <ul className={`list-${type}`}>{nameList}</ul>
      </div>
    </>
  );
};

List.propTypes = {
  type: PropTypes.oneOf(['square', 'circle']).isRequired,
  title: PropTypes.string,
};

List.defaultProps = {
  type: 'circle',
  title: true,
};
