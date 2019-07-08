import React, {Component, Fragment} from 'react'; 
import { Link } from 'react-router-dom';

import classnames from 'classnames/bind';
import styles from './Friend.module.scss';
const cx = classnames.bind(styles);

class Friend extends Component{

  tagList = (taglist) => {
    //   console.log(taglist);
      return taglist.map((tag, i) => {
        // console.log(tag.length);
        return (
        <li>{tag}</li>
        );
      })
    }

  render(){
    return(
      <ul className={cx('list_mymate')}>
        <li>
          <ul className={cx("talker_info")}>
            <li>{this.props.id + 1}</li><li>
            <Link to='/mateInfo'><img src={this.props.src}/></Link></li><li>
            <Link to='/mateInfo'>{this.props.talker}</Link></li><li className={cx("sub_info")}>{this.props.info}
            </li>
          </ul>
        </li><li>
        <ul className={cx("list_tag")}>{this.tagList(this.props.tag)}<li>{this.props.tag.length > 5 && (<p>+{this.props.tag.length-5}</p>)}</li></ul>
        </li><li>
          <button onClick={this.freindsRequest}>친구신청</button>
        </li>
      </ul>
    )
  }
}

export default Friend;