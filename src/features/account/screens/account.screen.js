import React from 'react';


import {AccountBackgroundImage,AccountCover,AccountContainer,AuthButton,AccountTitle,AnimationWrapper} from '../components/account.styles'
import {Spacer} from '../../../components/spacer/spacer.component'

import LottieView from 'lottie-react-native';   


export const AccountScreen =({navigation})=>{
return(
    <AccountBackgroundImage> 
     <AccountCover/>
        <AnimationWrapper>
        <LottieView
        key= "animation"
        autoPlay
        loop
        resizeMode="cover"
        source={require('../../../../assets/watermelon.json')}
    />
    </AnimationWrapper>
     <AccountTitle>MealsToGo</AccountTitle>
     <AccountContainer>
       
            <AuthButton 
            icon="lock-open-outline"
            mode="contained" 
            onPress={() => navigation.navigate('Login')}>
            Login
            </AuthButton>
        <Spacer size="large">
            <AuthButton 
              icon="email"
                mode="contained" 
                onPress={() => navigation.navigate("Register")}>
                Register
            </AuthButton>
        </Spacer>    
     </AccountContainer>
    </AccountBackgroundImage> 
)  
}




  