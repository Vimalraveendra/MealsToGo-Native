import React from 'react';
import {SafeAreaView,View,Text,StatusBar} from 'react-native'
import {Searchbar} from "react-native-paper"

import RestaurantsInfoCard from '../components/restaurants-info-card.component'
import styled from 'styled-components/native'

//  margin-top: ${StatusBar.currentHeight}px; we get an error
// on the ios simulator because its only an android feature.
const SafeArea =styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const SearchContainer =styled.View`
  padding: 16px;
`;

const RestaurantListContainer =styled.View`
  flex: 1;
  padding: 16px;
  background-color:blue;
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



