import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './AddressList.css';

export const AddressList = ({
  label,
  // type,
  title,
  assetPlaceholder,
  addressPlaceholder,
  listHeaderCol1,
  listHeaderCol2,
}) => {
  const mode = title ? 'title-bold' : '';

  const [names, setNames] = useState([
    {id: 1, asset: 'xrp', address: 'rNZH8FPhgXa1MAYY11MQEBfWScBF4PVV24'},
    {id: 2, asset: 'btc', address: '3Kj7ygvnKvUEmengY1Y3H5hQqTDtX9sa23'},
    {
      id: 3,
      asset: 'klay',
      address: '0xf30e68f5f920a2300a613327550c1f366265c53b',
    },
    {
      id: 4,
      asset: 'etc',
      address: '0x1ABf0601379f60CeAaA36314672c76Df3EA61206',
    },
    {id: 5, asset: 'xtz', address: 'tz1QtsmUTg1uvkaWmk4qMfZh9S4VWZg95tdh'},
  ]);
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputAsset, setInputAsset] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [nextId, setNextId] = useState(10);

  const handleAssetChange = (e) => {
    const userValue = e.target.value.toUpperCase();

    if (includesHangul(userValue)) {
      setErrorMessage('한글은 입력할 수 없습니다.');
      return false;
    } else {
      setErrorMessage('');
    }
    setInputAsset(userValue);
  };

  const handleAddressChange = (e) => {
    const userValue = e.target.value;

    if (includesHangul(userValue)) {
      setErrorMessage('한글은 입력할 수 없습니다.');
      return false;
    } else {
      setErrorMessage('');
    }
    setInputAddress(userValue);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputAsset.trim() === '' || inputAddress.trim() === '') {
      setErrorMessage('빈 값으로 만들 수 없습니다.');
      return false;
    }
    const nextNames = names.concat({
      id: nextId,
      asset: inputAsset,
      address: inputAddress,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputAsset('');
    setInputAddress('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li className="wallet-addr-item" key={name.id}>
      <p className="asset">{name.asset}</p>
      <p className="address">{name.address}</p>
      <p>
        <button className="btn-delete" onClick={() => onRemove(name.id)}>
          <span className="icon-delete"></span>
        </button>
      </p>
    </li>
  ));

  return (
    <div className="wrap">
      <p className={[`title`, mode].join(' ')}>{label}</p>

      <form className="form-inp" onSubmit={handleFormSubmit}>
        <input
          className="addr-input-area"
          value={inputAsset}
          onChange={handleAssetChange}
          placeholder={assetPlaceholder}
        />
        <input
          className="addr-input-area"
          value={inputAddress}
          onChange={handleAddressChange}
          placeholder={addressPlaceholder}
        />
        <button type="submit" className="addr-submit">
          추가
        </button>
      </form>

      <p className="error-text">{errorMessage}</p>

      <ul className="wallet-addr-list">
        <li className="wallet-addr-item-header">
          <p>{listHeaderCol1}</p>
          <p>{listHeaderCol2}</p>
          <p>삭제</p>
        </li>
        {nameList}
      </ul>
    </div>
  );
};

AddressList.propTypes = {
  label: PropTypes.string,
  // type: PropTypes.oneOf(['square', 'circle']).isRequired,
  title: PropTypes.bool,
  assetPlaceholder: PropTypes.string,
  addressPlaceholder: PropTypes.string,
  listHeaderCol1: PropTypes.string,
  listHeaderCol2: PropTypes.string,
};

AddressList.defaultProps = {
  label: null,
  // type: 'circle',
  title: true,
};
