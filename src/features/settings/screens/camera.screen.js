
import React, { useState, useEffect,useRef   } from 'react';
import {Text, View} from 'react-native';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native'


const ProfileCamera =styled(Camera)`
 flex:1;
`;


export const CameraScreen=() =>{
  const [hasPermission, setHasPermission] = useState(null);

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

  return (
  
      <ProfileCamera  ref={(camera=>cameraRef.current=camera)} type={Camera.Constants.Type.front}>
        
      </ProfileCamera>
   
  );
}

