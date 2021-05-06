
import React, { useState,useRef,useContext,useEffect } from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthenticationContext } from '../../../services/authentication/authentication.context';



const ProfileCamera =styled(Camera)`
flex:1;
`;
const InnerSnap =styled.View`
width:100%;
height:100%;
z-index:999;  
`;


export const CameraScreen=({navigation}) =>{
  const [hasPermission, setHasPermission] = useState(null);
  const {isAuthenticated:user} = useContext(AuthenticationContext)

  const cameraRef = useRef();

  useEffect(() => {
    const renderCamera =async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    }   
    renderCamera();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  } 

  const snap =async()=>{
      if(cameraRef){
        const photo = await cameraRef.current.takePictureAsync(); 
        AsyncStorage.setItem(`${user.uid}-photo`,photo.uri) 
        navigation.goBack();
      }

  }

  return (
    
      <ProfileCamera  ref={(camera)=>(cameraRef.current=camera)} type={Camera.Constants.Type.front} ratio={"16:9"}>
      <TouchableOpacity onPress={snap} >
       <InnerSnap/>
      </TouchableOpacity>
      </ProfileCamera>
   
   
  );
}

