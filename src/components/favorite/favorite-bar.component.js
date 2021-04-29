import React from 'react';

import {ScrollView,TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import CompactRestaurantInfo from '../restaurant/compact-restaurant-info';
import {Spacer} from '../../components/spacer/spacer.component'
import {Text} from '../typography/text.component'


const FavoriteWrapper =styled.View`
padding:10px;
`


const FavoriteBar = ({favorites,navigation})=>{
  if(!favorites.length){
      return null;
  }
    return(
        <FavoriteWrapper>
        <Spacer>
          <Text variant="caption">Favorites</Text>
         </Spacer>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {
               favorites.map(restaurant=>{
                  return <Spacer key={restaurant.name} pos='left' size='medium'>
                  <TouchableOpacity onPress={()=>navigation.navigate('RestaurantsDetail',{restaurant:restaurant})}>
                     <CompactRestaurantInfo restaurant={restaurant}/>
                     </TouchableOpacity>
                   </Spacer>
               })
           } 
         </ScrollView>
        </FavoriteWrapper>
        
    )
}

export default FavoriteBar;