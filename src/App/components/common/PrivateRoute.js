import React from 'react'; 
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// 로그인 해야만 접근할 수 있는 경로 설정 
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route 
    {...rest}
    render= {props => {
      if(auth.isLoading){
        return <h2> Loading... </h2>
      }else if(!auth.isAuthenticated){
        return <Redirect to="/login"/>
      }else{
        return <Component {...props} />
      }
    }}
  />
)



const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);