import React from 'react'
import { connect } from 'react-redux';

const MypageContainer = ({user}) => {
  let copied = {...user};
  console.log(copied.email);
  const { email, gender, nickname, age, introduction, tags} = copied;
  return (
    <div>
      {nickname}
    </div>
  )
}
const mapStateToProps = state => ({
  user : state.auth.user
}); 

export default connect(
  mapStateToProps,
  null
)(MypageContainer)
