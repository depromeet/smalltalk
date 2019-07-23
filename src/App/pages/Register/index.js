import React, {Fragment} from 'react';
import { RegisterTemplate } from 'App/components/Register/RegisterTemplate';
import MenuBtn from '../../components/MenuBtn';

const Register = () => {
  return (
    <Fragment>
    <MenuBtn barColor = { "#000" }  boxHidden = { "none" }/>
    <RegisterTemplate/>
    </Fragment>
  );
};

export default Register;
