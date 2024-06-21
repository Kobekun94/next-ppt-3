import style from './iconButton.module.scss';
import classNames from 'classnames/bind';
import React, { useState, useRef } from 'react';

const cx = classNames.bind(style);

const PopupButton: React.FC = () => {
  return (
    <div className={cx('box-popup')}>
      <div className={cx('body-pop')}>This is a popup!</div>
    </div>
  );
};

export default PopupButton;
