import React, {Component} from 'react'; 
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './Friend.module.scss';

const cx = classnames.bind(styles);

class Friend extends Component{
  
  tagList = ( taglist ) => {
    // console.log(taglist);
    return taglist.map(( tag, i ) => {
      // console.log(tag.length);
      if(i < 5) { 
        return ( <li key={`StyleTag-${i}`}>{tag}</li> );
      } 
      else { 
        return null 
      }
    })
  }

  render(){
    const { tag } = this.props;
    return(
      <div className={cx('list_mymate')}>
        <ul className={cx("talker_info")}>
          <li>{ this.props.id + 1 }</li>
          <li>
          <Link to='/mateInfo/0'>
            <img src={ this.props.src } alt=""/>
          </Link></li><li>
          <Link to='/mateInfo/0'>
            { this.props.talker }
          </Link>
          </li><li className={cx("sub_info")}>
          { this.props.info }</li>
        </ul>
        <ul className={cx("list_tag")}>
          { this.tagList(tag) }<li>
          { tag.length > 5 && (<p>+{ tag.length-5 }</p>) }</li>
        </ul>
        <div className={cx("call_btn")}>
          <button onClick={ this.freindsRequest }>친구신청</button>
        </div>
      </div>
    );
  }
}

export default Friend;