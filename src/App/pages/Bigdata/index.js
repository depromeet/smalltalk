import React, { Component, Fragment } from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';
import CountryList from '../../components/Bigdata/CountryList';
import BeSearchedCityList from '../../components/Bigdata/BeSearchedCityList';
import ListOfPeopleInTheCity from '../../components/Bigdata/ListOfPeopleInTheCity';
import MenuBtn from '../../components/MenuBtn';
import SideMenu from './../../components/Chat/SideMenu';
import axios from 'axios';

const cx = classnames.bind(styles);

const countryNames = [
  {id: 3, country: '네팔'},
  {id: 4, country: '대만'},
  {id: 5, country: '대한민국'},
  {id: 6, country: '라오스'},
  {id: 7, country: '쿠바'},
  {id: 8, country: '말레이시아'},
  {id: 9, country: '몰디브'},
  {id: 10, country: '미얀마'},
  {id: 11, country: '베트남'},
  {id: 12, country: '스리랑카'},
  {id: 13, country: '싱가포르'},
  {id: 14, country: '아랍에미리트'},
  {id: 15, country: '인도'},
  {id: 16, country: '인도네시아'},
  {id: 17, country: '일본'},
  {id: 18, country: '중국'},
  {id: 19, country: '캄보디아'},
  {id: 20, country: '태국'},
  {id: 21, country: '필리핀'},
  {id: 22, country: '홍콩'},
  {id: 23, country: '그리스'},
  {id: 24, country: '네덜란드'},
  {id: 25, country: '노르웨이'},
  {id: 26, country: '덴마크'},
  {id: 27, country: '독일'},
  {id: 28, country: '러시아'},
  {id: 29, country: '루마니아'},
  {id: 30, country: '룩셈부르크'},
  {id: 31, country: '모나코'},
  {id: 32, country: '벨기에'},
  {id: 33, country: '보스니아 헤르체고비나'},
  {id: 34, country: '불가리아'},
  {id: 35, country: '스웨덴'},
  {id: 36, country: '스위스'},
  {id: 37, country: '스페인'},
  {id: 38, country: '슬로베니아'},
  {id: 39, country: '아이슬란드'},
  {id: 40, country: '아일랜드'},
  {id: 41, country: '영국'},
  {id: 42, country: '이스라엘'},
  {id: 43, country: '이탈리아'},
  {id: 44, country: '체코'},
  {id: 45, country: '크로아티아'},
  {id: 46, country: '터키'},
  {id: 47, country: '포르투갈'},
  {id: 48, country: '폴란드'},
  {id: 49, country: '프랑스'},
  {id: 50, country: '핀란드'},
  {id: 51, country: '헝가리'},
  {id: 52, country: '미국'},
  {id: 53, country: '뉴질랜드'},
  {id: 54, country: '뉴칼레도니아'},
  {id: 55, country: '미국'},
  {id: 56, country: '호주'},
  {id: 57, country: '타히티'},
  {id: 58, country: '피지'},
  {id: 59, country: '미국'},
  {id: 60, country: '캐나다'},
  {id: 61, country: '멕시코'},
  {id: 62, country: '미국'},
  {id: 63, country: '산타크루즈'},
  {id: 64, country: '브라질'},
  {id: 65, country: '아르헨티나'},
  {id: 66, country: '에콰도르'},
  {id: 67, country: '자메이카'},
  {id: 68, country: '스페인'},
  {id: 69, country: '콜롬비아'},
  {id: 70, country: '쿠바'},
  {id: 71, country: '페루'},
  {id: 72, country: '네팔'},
  {id: 73, country: '네팔'},
  {id: 74, country: '네팔'},
  {id: 75, country: '대만'},
  {id: 76, country: '대한민국'},
  {id: 77, country: '라오스'},
]

class Bigdata extends Component {
  componentDidMount() {
    // GET 도시 리스트
    const token = 'Token ' + localStorage.getItem('token');
    const cityListURL = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com/travelinfo/city/';
    const config = { headers: { 'Authorization': token, 'Content-Type': 'application/json'} };
    const cityList = axios.get(cityListURL, config);
    cityList.then(response => {
      // GET 받은 도시 리스트에 나라 이름 추가
      let objArray = response.data;
      for(let obj of objArray) {
        for (let obj2 of countryNames) {
          if(obj2.id === obj.country){
            obj.countryName = obj2.country
          }
        }
      }
      // GET 도시 리스트에서 중복된 데이터 제거
      this.setState({ allCountryName: response.data.splice(0, 746) });
      }).catch(err => console.log(err));

    // GET 여행중인 사람이 포함 된 도시 리스트 
    // const beSearchedCityListURL = `http://travel-dev.ap-northeast-2.elasticbeanstalk.com/travelinfo/city?is_recommended=true/`;
    // const beSearchedCityList = axios.get(beSearchedCityListURL, config);
    // beSearchedCityList.then(response => {
    //   this.setState({ countryData: response.data.splice(0, 746) });
    //   }).catch(err => console.log(err));
    }

  constructor(props) {
    super(props);

    this.state = {
      countryData: [
        { name: '코펜하겐', picture: 'http://5b0988e595225.cdn.sohucs.com/images/20181215/ff0a549dfbee4acf8e73e65da83532d4.jpeg', number: '50' },
        { name: '카이로', picture: 'https://constantinnautics.ru/wp-content/uploads/2019/05/photo-1527910444160-b1d75c05d593.jpeg', number: '40' },
        { name: '멕시코시티', picture: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ', number: '38' },
        { name: '울란바토르', picture: 'https://scontent-lhr3-1.cdninstagram.com/vp/bb68e1a811f8b1b5318137a064e5b069/5D7E7DCD/t51.2885-15/e35/56744736_557166404774285_2235216315258908791_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MjAzODU1NDkxMzIxOTA0OTc4OA%3D%3D.2', number: '16' },
        { name: '리우데자네이루', picture: 'http://freedomlab.org/wp-content/uploads/2019/05/raphael-nogueira-519766-unsplash-1024x642.jpg', number: '13' },
        { name: '아테네', picture: 'https://scontent-atl3-1.cdninstagram.com/vp/bf9d074c985a8bf8a6c5ae84c60bb467/5DC6BF99/t51.2885-15/e35/61539030_609570929555367_3975801932052361307_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com', number: '11' },
        { name: '뉴델리', picture: 'https://s3.amazonaws.com/churchplantmedia-cms/heartcry_missionary_society_radford_va/pakistan_stock_2.jpg', number: '10' },
        { name: '암스테르담', picture: 'https://cafebiz.cafebizcdn.vn/2019/6/12/photo-4-1560334321948931912724.jpg', number: '8' },
        { name: '웰링턴', picture: 'https://s3.amazonaws.com/iwaria/prod/small-thumbs/1503586914222.95.jpeg', number: '5' },
      ],
      allCountryName: [
          // {
          //     "id": 1,
          //     "name": "박타푸르",
          //     "description": "",
          //     "country": 3
          // },
          // {
          //     "id": 2,
          //     "name": "치트완",
          //     "description": "",
          //     "country": 3
          // },
      ],
      listOfPeopleInTheCity: [
        {
          nickname: 'ㄱi염둥이', age: '20대', gender: '남성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/1009136F-893C-45FB-86DC-73A21B027E73.png', isClickedFriendRequest: false,
        },
        {
          nickname: '같이 여행해용', age: '20대', gender: '남성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/93A16D9E-921E-488A-A134-B9A949C4D4F1.png', isClickedFriendRequest: false,
        },
        {
          nickname: '반지하', age: '20대', gender: '여성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
        {
          nickname: '큼큼..설레내요 ㅋ', age: '40대', gender: '여성', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiedvpmN8P3m0oNWcHypwDpJgB2ksBfZl-Fmc8ItNVDaE5_szWRg', isClickedFriendRequest: false,
        },
        {
          nickname: '체코 프라하', age: '20대', gender: '남성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E2680D7C-C8A9-44E4-B32A-62CF826B4418.png', isClickedFriendRequest: false,
        },
        {
          nickname: '누나', age: '20대', gender: '남성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/150B0293-45E0-4000-B492-4CF0A7381CEE.png', isClickedFriendRequest: false,
        },
        {
          nickname: '파자마 파티', age: '30대', gender: '여성', picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', isClickedFriendRequest: false,
        },
        {
          nickname: '피카츄', age: '10대', gender: '남성', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPs04xhwD31CNxlxg8VuJb2uhVBr8Z7FD40tlslfVwQ3pQNEW', isClickedFriendRequest: false,
        },
        {
          nickname: '파이리', age: '30대', gender: '여성', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBeQpRlB5lF_IB1qxyolCeZSEblmPlSnprLKrI000aneZsYiL7w', isClickedFriendRequest: false,
        },
        {
          nickname: '꼬부기', age: '20대', gender: '남성', picture: 'https://pbs.twimg.com/profile_images/866241914504269825/Ys3lgbC4.jpg', isClickedFriendRequest: false,
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
      picture: '',
    };
  }

  handlePicture = (pictureURL) => {
    this.setState({ picture: pictureURL })
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
      <Fragment>
        <MenuBtn barColor = { "#000" }  boxHidden = { "block" }/>
        <SideMenu />
          <div className={cx('bigdata')}>
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
                  countryNumber={x.country}
                  countryName={x.countryName}
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
                  <div className={cx('country-picture')} style={{ backgroundImage: `url(${this.state.picture})` }} />
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
                    handlePicture={this.handlePicture}
                  />
                ))}
              </div>
            )}
        </div>
      </Fragment>
    );
  }
}

export default Bigdata;
