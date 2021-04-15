import React from 'react';
import { Text} from 'react-native'
import {  Card} from 'react-native-paper';
import styled from 'styled-components/native'


// here  we do styled(Card ) because Card is a component 
// that comes from different library react-native-paper
// not from react-native library.by using parenthesis we 
// can style the external components
const RestaurantCard =styled(Card)`
background-color:#fff;
`;

const RestaurantCardCover =styled(Card.Cover)`
 padding:20px;
 background-color:#fff;
`;
const TitleText =styled(Text)`
    font-size:15px;
    padding:16px; 
`;

const RestaurantsInfoCard=({restaurant={}})=>{
  const { name = "Some Restaurant",
  icon,
  photos = [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  ],
  address = "100 some random street",
  isOpenNow = true,
  rating = 4,
  isClosedTemporarily,} = restaurant;
return(
  
  <RestaurantCard elevation={5}>
    <RestaurantCardCover  key={name} source={{ uri:photos[0] }} />
      <TitleText>{name}</TitleText> 
  </RestaurantCard>
)
}

export default RestaurantsInfoCard;

