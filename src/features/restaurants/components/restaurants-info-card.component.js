import React,{useContext} from 'react';
import { Text} from 'react-native'
import {  Card} from 'react-native-paper';
import styled from 'styled-components/native'


// here  we do styled(Card ) because Card is a component 
// that comes from different library react-native-paper
// not from react-native library.by using parenthesis we 
// can style the external components
const RestaurantCard =styled(Card)`
background-color:${props=>props.theme.colors.bg.primary};
`;

const RestaurantCardCover =styled(Card.Cover)`
 padding:${props=>props.theme.space[3]};
 background-color:${props=>props.theme.colors.bg.primary}
`;
const TitleText =styled(Text)`
    font-family:${props=>props.theme.fonts.body}; 
    font-size:${props=>props.theme.fontSizes.body};
    padding:${props=>props.theme.space[3]}; 
    color:${props=>props.theme.colors.ui.error};
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

