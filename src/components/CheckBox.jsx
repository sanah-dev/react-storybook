import React from 'react';
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const CheckBox = ({ children, checked, ...rest }) => {
  return (
    <div className={cx('checkbox')}>
        <label>
            <input type="checkbox" checked={checked} {...rest} />
            <div className={cx('icon')}>
                {checked ? (<span className={cx('checked')}>체크됨</span>) : (<span>체크안됨</span>)}
            </div>
        </label>
        <span>{children}</span>
    </div>

  );
}

export default CheckBox;
