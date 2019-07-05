import React, { Component, Fragment} from 'react';
import MainHome from './MainHome';
import Start from './Start';

class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoggedIn : true // false
    }
  }

  render(){
    const { isLoggedIn } = this.state;
    return(
      <Fragment>
      {
        isLoggedIn ?
        <MainHome/>
        :
        <Start/>
      }
      </Fragment>
    )
  }
}

export default Home;