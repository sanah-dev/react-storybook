import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const DataList = ({label, type, title, placeholder}) => {
  const mode = title ? 'title-bold' : '';

  const [names, setNames] = useState([
    {id: 1, text: '아바타'},
    {id: 2, text: '올빼미'},
    {id: 3, text: '대무가'},
    {id: 4, text: '헌트'},
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, //nextId 값을 id로 설정하고
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해 준다.
    setNames(nextNames); // names 값을 업데이트한다.
    setInputText(''); // inputText를 비운다.
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <p className={[mode].join(' ')}>{label}</p>
      <p>리스트에 추가된 텍스트는 더블클릭하면 삭제됩니다.</p>
      <input value={inputText} onChange={onChange} placeholder={placeholder} />
      <button onClick={onClick}>추가</button>
      <ul className={`list-${type}`}>{nameList}</ul>
    </>
  );
};

DataList.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['square', 'circle']).isRequired,
  title: PropTypes.bool,
  placeholder: PropTypes.string,
};

DataList.defaultProps = {
  label: '영화 추천 리스트',
  type: 'circle',
  title: true,
  placeholder: '입력하고 추가를 눌러보세요',
};
