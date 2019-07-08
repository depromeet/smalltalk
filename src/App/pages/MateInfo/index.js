import React, {Component, Fragment} from 'react';

import classnames from 'classnames/bind';
import styles from './MateInfo.module.scss';
const cx = classnames.bind(styles);

class MateInfo extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  render(){
    return (
        <div>Info 페이지입니다.</div>
    );
  }
}

export default MateInfo;