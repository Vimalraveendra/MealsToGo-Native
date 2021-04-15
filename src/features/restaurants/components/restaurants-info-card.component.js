import React,{useContext} from 'react';
import { Text,View,Image} from 'react-native'
import {  Card} from 'react-native-paper';
import styled from 'styled-components/native'
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star'
import open from '../../../../assets/open'


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
    font-family:${props=>props.theme.fonts.heading}; 
    font-size:${props=>props.theme.fontSizes.body};
    color:${props=>props.theme.colors.ui.primary};
`;

const Info =styled.View`
  padding:${props=>props.theme.space[3]}; 
`;

const Address =styled.Text`
   font-family:${props=>props.theme.fonts.body}; 
   font-size:${props=>props.theme.fontSizes.caption};

`
const Section =styled.View`
flex-direction:row;
justify-content:space-between;
align-items:center;

`
const Rating =styled.View`
    flex-direction:row;
    padding-top:${props=>props.theme.space[2]};
    padding-bottom:${props=>props.theme.space[2]}
`

const SectionEnd=styled .View`
  flex-direction:row;
`;

const Icon =styled.View`
padding:0 16px
`


const RestaurantsInfoCard=({restaurant={}})=>{
  const { name = "Some Restaurant",
  icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  photos = [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  ],
  address = "100 some random street",
  isOpenNow = true,
  rating = 4,
  isClosedTemporarily=true,} = restaurant;
// here we creating an array of undefined items
// Math.round is used to round down the value of rating to integer
const ratingArray = Array.from(new Array(Math.round(rating)));


return(
  
  <RestaurantCard elevation={5}>
    <RestaurantCardCover  key={name} source={{ uri:photos[0] }} />
     <Info>   
      <TitleText>{name}</TitleText>
      <Section>
      <Rating>
          {
            ratingArray.map((item,index)=>(
              <SvgXml width={20} height={20} xml={star} key={index} />
              ))
          }  
       </Rating>
       <SectionEnd>
            {
              isClosedTemporarily && (
                <Text variant ='label' style={{color:'red',fontSize:16}}>ClosedTemporarily</Text>
              )
            }
            <Icon>
            {
              isOpenNow&&<SvgXml width={20} height={20} xml={open} x/>
            }
            </Icon>
            <Image style={{width:18,height:18}} source={{uri:icon}}/>
      </SectionEnd>
      </Section>
      <Address>{address}</Address> 

      </Info>
  </RestaurantCard>
)
}

export default RestaurantsInfoCard;

