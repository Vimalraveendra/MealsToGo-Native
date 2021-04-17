import styled from 'styled-components'
import {SafeAreaView,StatusBar} from 'react-native'


//  margin-top: ${StatusBar.currentHeight}px; we get an error
// on the ios simulator because its only an android feature.
export const SafeArea =styled(SafeAreaView)`
  flex: 1;
  background-color:${props=>props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;
