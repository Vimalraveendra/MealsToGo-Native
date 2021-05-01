import React from 'react';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import {AccountScreen} from '../../features/account/screens/account.screen'

const AccountStack = createStackNavigator();

const AccountNavigator = ()=>{
    return(
       <AccountStack.Navigator headerMode="none">
         <AccountStack.Screen name="Main" component={AccountScreen} />
         <AccountStack.Screen name="Login" component={()=>null} />
       </AccountStack.Navigator>
    )
}

export default AccountNavigator;