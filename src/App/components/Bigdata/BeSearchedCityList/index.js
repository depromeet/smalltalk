import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classnames.bind(styles);

const CountryList = ( {name, input, isClickedInputButton} ) => {
  if (isClickedInputButton === true && input !== '') {
    if (name.indexOf(input) === -1) return <div />;
    if (name.indexOf(input) === 0) {
      return (
      <div className={cx('name-background')}>
        <div className={cx("city-name")}>{name}</div>
        <img className={cx("city-background")} alt="filter"></img>
      </div>
      );
    }
    return <div />;
  } return <div />;
}

export default CountryList;
