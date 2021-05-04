import React,{useContext} from 'react';
import styled from  'styled-components/native'
import {List,Avatar} from 'react-native-paper'

import {AuthenticationContext} from '../../../services/authentication/authentication.context'

import {SafeArea} from '../../../components/utility/safe-area.component'
import {Text} from '../../../components/typography/text.component'
import {Spacer} from '../../../components/spacer/spacer.component'


const SettingsItem =styled(List.Item)`
padding:${props=>props.theme.space[3]}; 
`;

const AvatarContainer =styled.View`
align-items:center;
`;

export const SettingsScreen=({navigation})=> {
    const{onLogout,isAuthenticated:user} = useContext(AuthenticationContext)
   
     return (
       <SafeArea>
       <AvatarContainer>
       <Avatar.Icon size={180} icon="human"  backgroundColor='#2182BD'/>
         <Spacer pos='top' size='large'>
           <Text variant="label">{user.email}</Text>
         </Spacer>
       </AvatarContainer>
         <List.Section>
            <SettingsItem
            title="Favorites"
            description="View Your Favorites"
            left={props=><List.Icon {...props} color="black" icon='heart'/> }
            onPress={()=>navigation.navigate('Favorites')}
            />
            
           <SettingsItem
             title="Logout"
             left={props=><List.Icon {...props} color="black" icon='logout'/> }
             onPress={onLogout}
           />
         </List.Section>
        
       </SafeArea>
     );
   }