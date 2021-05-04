import React,{useContext} from 'react';
import {View,Text,Button} from 'react-native'
import {List} from 'react-native-paper'

import {AuthenticationContext} from '../../../services/authentication/authentication.context'

import {SafeArea} from '../../../components/utility/safe-area.component'

export const SettingsScreen=({navigation})=> {
    const{onLogout} = useContext(AuthenticationContext)
     return (
       <SafeArea>
         <List.Section>
            <List.Item
            style={{padding:16}}
            title="Favorites"
            description="View Your Favorites"
            left={props=><List.Icon {...props} color="black" icon='heart'/> }
            onPress={()=>navigation.navigate('Favorites')}
            />
            
           <List.Item
             style={{padding:16}}
             title="Logout"
             left={props=><List.Icon {...props} color="black" icon='logout'/> }
             onPress={onLogout}
           />
         </List.Section>
        
       </SafeArea>
     );
   }