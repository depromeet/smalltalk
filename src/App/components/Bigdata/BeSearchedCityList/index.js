import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classnames.bind(styles);

const CountryList = ( {name, input, isClickedInputButton, handleClickInput, offInputBox, handleChange, country} ) => {
  const beClickedValueToInputBox = () => {
    handleClickInput(name);
    offInputBox();
  }
  // 드롭다운 버튼이 클릭되었고 검색창이 비어있지 않아?
  if (isClickedInputButton === true && input !== '') {
    // 검색창의 내용이 DB의 country와 같아?
    if (Number(input) === country) {
      return (
      <div className={cx('name-background')} onClick={beClickedValueToInputBox}>
        <div className={cx("city-name")}>{name}</div>
      </div>
      )
    }
    // 검색창의 내용을 DB에서 찾았어?
    else if (name.indexOf(input) === 0) {
      return (
      <div className={cx('name-background')} onClick={beClickedValueToInputBox}>
        <div className={cx("city-name")}>{name}</div>
      </div>
      );
    }
    // 검색창의 내용을 DB에서 찾지 못했어?
    else {
      return <div />;
    }
  } 
  // 드롭다운 버튼이 클릭되지 않았거나 검색창이 비어있어
  else {
    return <div />;
  }
}

export default CountryList;
