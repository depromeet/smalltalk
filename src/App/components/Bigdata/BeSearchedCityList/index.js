import React, { Component, Fragment } from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';
const cx = classnames.bind(styles);

class CountryList extends Component{
//   constructor(props){
//     super(props);
//   }

  render(){
        if(this.props.isClickedInputButton === true && this.props.input !== ""){
            if(this.props.name.indexOf(this.props.input) === -1) return <div></div>;
            if(this.props.name.indexOf(this.props.input) === 0) return <div className={cx("city-name")}>{this.props.name}</div>
            else return <div></div>;
        } else return <div></div>;
    }
}

export default CountryList;