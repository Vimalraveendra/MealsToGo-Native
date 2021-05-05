import React from 'react';
import { createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';

import {SettingsScreen} from '../../features/settings/screens/settings.screen'
import {FavoritesScreen} from '../../features/settings/screens/favorites.screen'


const SettingsStack = createStackNavigator();

 const SettingsNavigator=({route,navigation   })=>{
    return(
        <SettingsStack.Navigator
         headerMode="Screen"
         screenOptions={ {
             CardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS
         }}
        >
         <SettingsStack.Screen  name="Settings" component={SettingsScreen} options={{header:()=>null}}/>
         <SettingsStack.Screen name="Favorites" component={FavoritesScreen} options={{title:"Favorites"}}/>
        </SettingsStack.Navigator>
    )
}

export default SettingsNavigator;