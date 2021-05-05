import React from 'react';
import { createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';

import {SettingsScreen} from '../../features/settings/screens/settings.screen'
import {FavoritesScreen} from '../../features/settings/screens/favorites.screen'
import {CameraScreen} from '../../features/settings/screens/camera.screen'


const SettingsStack = createStackNavigator();

 const SettingsNavigator=()=>{
    return(
        <SettingsStack.Navigator
         headerMode="screen"
         screenOptions={ {
             CardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS
         }}
        >
         <SettingsStack.Screen  name="Settings" options={{header:()=>null}} component={SettingsScreen} />
         <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
         <SettingsStack.Screen name="Camera" component={CameraScreen} />
        </SettingsStack.Navigator>
    )
}

export default SettingsNavigator;