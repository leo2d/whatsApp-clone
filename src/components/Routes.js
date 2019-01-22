import React from 'react'
import { createStackNavigator } from 'react-navigation';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Routes = createStackNavigator({
    Login: { screen: LoginForm },
    SignUp: { screen: SignUpForm },
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default Routes;