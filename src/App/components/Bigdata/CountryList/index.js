import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classnames.bind(styles);

const CountryList = ( {name, number, input, picture, handleName, handlePeopleCount, showListOfPeopleInTheCity} ) => {
  //   constructor(props){
  //     super(props);
  //   }

  const showUserList = () => {
    // console.log(e.target);
    handleName(name);
    handlePeopleCount(number);
    showListOfPeopleInTheCity();
  }
    if (name.indexOf(input) === -1) return <div />;

    return (
      <div className={cx('box')}>
        <img src={picture} className={cx('picture')} alt="country" />
        <div className={cx('left-row')}>
          <div className={cx('country-name')}>{name}</div>
          <div className={cx('content')}>
            <div className={cx('phrases')}>현재</div>
            <div className={cx('number')}>{number}명</div>
            <div className={cx('phrases')}>이 여행중입니다</div>
          </div>
        </div>
        <div className={cx('right-row')} onClick={showUserList}>
          <div className={cx('text')}>바로보기</div>
        </div>
      </div>
    ); 
}

export default CountryList;
