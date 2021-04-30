import React,{useContext} from 'react';
import { View,Text } from 'react-native';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import AppNavigator from './app.navigator'



const Navigation = ()=>{
    const {isAuthenticated} = useContext(AuthenticationContext)
    return <AppNavigator/>
    
    
}

export default Navigation