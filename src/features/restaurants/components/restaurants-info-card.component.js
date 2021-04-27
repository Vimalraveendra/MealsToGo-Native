import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import {Text} from '../../../components/typography/text.component'

import {RestaurantCard,RestaurantCardCover,Info,Section,Rating,SectionEnd,Icon,Address,ImageIcon} from './restaurants-info-card.styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {Spacer} from '../../../components/spacer/spacer.component'


const RestaurantsInfoCard=({restaurant={},navigation})=>{
  const { name = "Some Restaurant",
  icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  photos = [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  ],
 address = "100 some random street",
  isOpenNow = true,
  rating = 4,
  isClosedTemporarily=true,
  placeId
}=restaurant;
// here we creating an array of undefined items
// Math.round is used to round down the value of rating to integer
const ratingArray = Array.from(new Array(Math.round(rating)));
return(
  <TouchableOpacity onPress={()=>navigation.navigate('RestaurantsDetail')}>
  <RestaurantCard elevation={5}>
    <RestaurantCardCover  key={name} source={{uri:photos[0]}}/>
     <Info>   
      <Text variant='label'>{name}</Text>
      <Section>
      <Rating>
          {
            ratingArray.map((_,index)=>(
              <SvgXml key={`star-${placeId}-${index}`}  width={20} height={20} xml={star} />
              ))
          }  
       </Rating>
       <SectionEnd>
            {
              isClosedTemporarily && (
                <Text variant ='error'  >CLOSEDTEMPORARILY</Text>
              )
            }
            <Icon>
            {
              isOpenNow&&<SvgXml width={20} height={20} xml={open} x/>
            }
            </Icon>
            <ImageIcon source={{uri:icon}}/>
      </SectionEnd>
      </Section>
      <Address>{address}</Address> 

      </Info>
  </RestaurantCard>
  </TouchableOpacity  >
)
}

export default RestaurantsInfoCard;

