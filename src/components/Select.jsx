import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Select.css';

export const Select = ({label, selected, required, state, borderColor}) => {
  const option = [
    {index: 1, value: 'apple', name: '사과'},
    {index: 2, value: 'banana', name: '바나나'},
    {index: 3, value: 'orange', name: '오렌지'},
  ];

  const [Selected, setSelected] = useState('banana');
  const [show, setShow] = useState(false);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const onShow = () => {
    setShow(!show);
    console.log(show);
  };

  const selectList = option.map((item) => (
    <li value={item.value} key={item.index} className="dropdwon-item">
      {item.name}
    </li>
  ));

  const selectOption = option.map((item) => (
    <option value={item.value} key={item.index}>
      {item.name}
    </option>
  ));

  return (
    <>
      {label}
      <div className="dropdown">
        <button
          className="dropdown-toggle"
          type="button"
          onClick={() => onShow()}
        >
          <span>{selected}</span>
          <span className="icon-arrow">▼</span>
        </button>

        {show && (
          <ul className="dropdown-menu" role="menu">
            {selectList}
          </ul>
        )}
      </div>

      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />

      <select onChange={handleSelect} value={Selected}>
        {selectOption}
      </select>

      <p>
        Selected: <b>{Selected}</b>
      </p>
    </>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
};

Select.defaultProps = {
  label: '테스트',
};
