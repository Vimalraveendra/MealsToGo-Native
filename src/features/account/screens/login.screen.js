import React,{useState,useContext} from "react";
import {ActivityIndicator,Colors} from 'react-native-paper'

import {AccountBackgroundImage,AccountCover,AccountContainer,AuthButton,AuthInput,AccountTitle,ErrorContainer} from '../components/account.styles'


import {Text} from '../../../components/typography/text.component'
import {Spacer} from '../../../components/spacer/spacer.component'

import {AuthenticationContext} from '../../../services/authentication/authentication.context'
import { colors } from "../../../infrastructure/theme/colors";

export const LoginScreen = ({navigation})=>{
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const{onLogin,error,isLoading } = useContext(AuthenticationContext)


    return(
        <AccountBackgroundImage >
          <AccountCover/>
          <AccountTitle>MealsToGo</AccountTitle>
          <AccountContainer>
          <AuthInput 
           label="Email"
           value={email}
           textContentType="emailAddress"
           keyboardType="email-address"
           autoCapitalize="none"
           onChangeText={text => setEmail(text)}
             />
          <Spacer size="large">
          <AuthInput  
          label="Password" 
          value={password}
          textContentType='password'
          secureTextEntry
          autoCapitalize="none"
          onChangeText={text => setPassword(text)}
          />
         </Spacer>
         {
             error && (
                <Spacer size="large">
                <ErrorContainer>
                <Text variant='error'>{error}</Text>
                </ErrorContainer>
                </Spacer>
             )
         }
          <Spacer size="large">
          {
            !isLoading?
            <AuthButton 
            icon="lock-open-outline"
            mode="contained" 
            onPress={()=>{
                onLogin(email,password)
                setEmail("")
                setPassword("")
              }}>
            Submit    
            </AuthButton>:
            <ActivityIndicator animating={true} color={Colors.amber100}/>

          }
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton 
        mode="contained" 
        onPress={()=>navigation.goBack()}>
        Back   
        </AuthButton>
      </Spacer>
   
     </AccountBackgroundImage>   
      
    ) 
}

