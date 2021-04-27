import styled from 'styled-components'
import {SafeAreaView,StatusBar,FlatList} from 'react-native'
// import transform from 'css-to-react-native'

// const RestaurantList =styled(FlatList).attrs(props=>({
//   contentContainerStyle:transform([["padding",props.theme.space[3]]])
  
// }))``;

export const RestaurantList =styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16,
  },
})``;




//  margin-top: ${StatusBar.currentHeight}px; we get an error
// on the ios simulator because its only an android feature.
export const SafeArea =styled(SafeAreaView)`
  flex: 1;
  background-color:${props=>props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

export const SearchContainer =styled.View`
  padding:${props=>props.theme.space[3]}
`;

// export const RestaurantListContainer =styled.View`
//   flex: 1;
//   padding: ${props=>props.theme.space[3]}
//   background-color: ${props=>props.theme.colors.bg.secondary};
// `;
