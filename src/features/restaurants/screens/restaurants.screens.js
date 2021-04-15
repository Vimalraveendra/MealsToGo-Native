import React from 'react';
import {SafeAreaView,View,Text,StatusBar} from 'react-native'
import {Searchbar} from "react-native-paper"

import RestaurantsInfoCard from '../components/restaurants-info-card.component'
import styled from 'styled-components/native'

//  margin-top: ${StatusBar.currentHeight}px; we get an error
// on the ios simulator because its only an android feature.
const SafeArea =styled(SafeAreaView)`
  flex: 1;
  background-color:${props=>props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const SearchContainer =styled.View`
  padding:${props=>props.theme.space[3]}
`;

const RestaurantListContainer =styled.View`
  flex: 1;
  padding: ${props=>props.theme.space[3]}
  background-color: ${props=>props.theme.colors.bg.secondary};
`;

 const RestaurantsScreen = ()=>{
   return(
    <SafeArea>
    <SearchContainer >
       <Searchbar placeholder="search"/>
    </SearchContainer>
      <RestaurantListContainer>
      <RestaurantsInfoCard/>
      </RestaurantListContainer>
    </SafeArea>
)
 }

 export default RestaurantsScreen;



