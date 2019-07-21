import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';
import CountryList from '../../components/Bigdata/CountryList';
import BeSearchedCityList from '../../components/Bigdata/BeSearchedCityList';
import ListOfPeopleInTheCity from '../../components/Bigdata/ListOfPeopleInTheCity';

const cx = classnames.bind(styles);

class Bigdata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryData: [
        { name: '리스본', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/90CD9AE9-4B90-4787-89C4-0629DDE52E9F.png', number: '50' },
        { name: '파리', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/8444F46F-F2CD-495C-8DCB-516568EB0188.png', number: '40' },
        { name: '베니스', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/06E7EF4E-1633-484D-846B-19838F216869.png', number: '38' },
        { name: '바르셀로나', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8BDA0FD-70F2-4262-8EB1-E4FCDA933F72.png', number: '16' },
        { name: '도쿄', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/4E8FC029-FF06-455F-8C24-B069DDFFDF62.png', number: '13' },
        { name: '뉴욕', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/58B7BA7B-1D57-45BC-85B4-0DA5543742AE.png', number: '11' },
        { name: '카이로', picture: 'http://cdn.onlinewebfonts.com/svg/img_169110.png', number: '10' },
        { name: '이스탄불', picture: 'http://cdn.onlinewebfonts.com/svg/img_169110.png', number: '8' },
        { name: '상파울루', picture: 'http://cdn.onlinewebfonts.com/svg/img_169110.png', number: '5' },
      ],
      allCountryName: [
        { name: '리스본' },
        { name: '리스본' },
        { name: '리스본' },
        { name: '리스본' },
        { name: '리스본' },
        { name: '리스본' },
        { name: '리마' },
        { name: '파리' },
        { name: '파이리' },
        { name: '베니스' },
        { name: '바르셀로나' },
        { name: '바나나' },
        { name: '도쿄' },
        { name: '도도도' },
        { name: '뉴욕' },
        { name: '카이로' },
        { name: '카카' },
        { name: '이스탄불' },
        { name: '베이징' },
        { name: '상파울루' },
      ],
      listOfPeopleInTheCity: [
        {
          nickname: '우와아', age: '20대', gender: '남성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
        {
          nickname: '여행가고싶다', age: '30대', gender: '여성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
        {
          nickname: '어디로갈까', age: '40대', gender: '남성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
        {
          nickname: '닉네임', age: '30대', gender: '여성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
        {
          nickname: '핸드폰', age: '20대', gender: '남성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
        {
          nickname: '우와아', age: '20대', gender: '남성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
        {
          nickname: '여행가고싶다', age: '30대', gender: '여성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
        {
          nickname: '어디로갈까', age: '40대', gender: '남성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
        {
          nickname: '닉네임', age: '30대', gender: '여성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
        {
          nickname: '핸드폰', age: '20대', gender: '남성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
        {
          nickname: '빈츠', age: '10대', gender: '여성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
      ],
      inputValue: '',
      name: '',
      peopleCount: 0,
      isClickedInputButton: false,
      isClickedCity: false,
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleClickInput = (value) => {
    this.setState({ inputValue: value })
  }

  onInputBox = () => {
    this.setState({ isClickedInputButton: true });
  }

  offInputBox = () => {
    this.setState({ isClickedInputButton: false });
  }

  showListOfPeopleInTheCity = () => {
    this.setState({ isClickedCity: true });
  }

  handleName = (cityName) => {
    this.setState({ name: cityName });
  }

  handlePeopleCount = (newCount) => {
    this.setState({ peopleCount: newCount });
  }

  handleFriendRequest = (i) => {
    const newState = this.state.listOfPeopleInTheCity;
    newState[i].isClickedFriendRequest = true;
    this.setState({ listOfPeopleInTheCity: newState });
  }

  render() {
    return (
      <div className={cx('bigdata')}>
        {/* 스몰토크 로고 */}
        <div className="logo" />
        {/* 검색 바 */}
        <div className={cx('search-bar')}>
          <input className={cx('input')} onChange={this.handleChange} value={this.state.inputValue} placeholder="나라 / 도시 검색" />
          {this.state.isClickedInputButton
            ? <div className={cx('drop-up-button')} onClick={this.offInputBox} />
            : <div className={cx('drop-down-button')} onClick={this.onInputBox} />}
          <div className={cx('input-box')}>
            {this.state.allCountryName.map((x, i) => (
              <BeSearchedCityList
                name={x.name}
                key={i}
                input={this.state.inputValue}
                isClickedInputButton={this.state.isClickedInputButton}
                offInputBox={this.offInputBox}
                handleClickInput={this.handleClickInput}
              />
            ))}
          </div>
        </div>
        {this.state.isClickedCity
          ? (
            <div className={cx('country')}>
              <div className={cx('country-name')}>{this.state.name}</div>
              <div className={cx('second-line')}>
                <div className={cx('number-of-people')}>
                  {this.state.peopleCount}명
                </div>
                <div className={cx('text')}>의 스몰토커가</div>
              </div>
              <div className={cx('text-2')}>현재{' '}{this.state.name}에 있어요!</div>
              <div className={cx('background')}>
                <div className={cx('circle')} />
                <div className={cx('country-picture')} />
                <div className={cx('edge-circle')} />
              </div>
            </div>
          )
          : (
            <div className={cx('default-value')}>
              <div className={cx('phrases-1')}>나라/도시를<br />검색해주세요</div>
              <div className={cx('phrases-2')}>
                <div className={cx('phrases-black')}>현재 가장 많은</div>
                <div className={cx('phrases-2-2')}>
                  <div className={cx('phrases-red')}>토커</div>
                  <div className={cx('phrases-black')}>가 있는 도시</div>
                </div>
              </div>
              <div className={cx('arrow')} />
            </div>
          )}
        {/* 나라 리스트 */}
        {this.state.isClickedCity
          ? (
            <div className={cx('country-list')}>
              {this.state.listOfPeopleInTheCity.map((x, i) => (
                <ListOfPeopleInTheCity
                  id={i}
                  key={i}
                  nickname={x.nickname}
                  age={x.age}
                  gender={x.gender}
                  picture={x.picture}
                  isClickedFriendRequest={x.isClickedFriendRequest}
                  handleFriendRequest={this.handleFriendRequest}
                />
              ))}
            </div>
          )
          : (
            <div className={cx('country-list')}>
              {this.state.countryData.map((x, i) => (
                <CountryList
                  name={x.name}
                  picture={x.picture}
                  number={x.number}
                  key={i}
                  input={this.state.inputValue}
                  handleName={this.handleName}
                  handlePeopleCount={this.handlePeopleCount}
                  showListOfPeopleInTheCity={this.showListOfPeopleInTheCity}
                />
              ))}
            </div>
          )}
        {/* 친구 리스트, 채팅 버튼 */}
        <div className="buttons">
          <div className="list-button" />
          <div className="chat-button" />
        </div>
      </div>
    );
  }
}

export default Bigdata;
