import React from 'react';
import {  StyleSheet,Text} from 'react-native'
import {  Card} from 'react-native-paper';



const RestaurantsInfo=({restaurant={}})=>{
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
  
  <Card style={styles.card} elevation={5}>
    <Card.Cover style={styles.cardImage} key={name} source={{ uri:photos[0] }} />
      <Text style={styles.cartText}>{name}</Text> 
  </Card>
)
}

export default RestaurantsInfo;

const styles= StyleSheet.create({
  card:{
  backgroundColor:'#fff'
  
  },
  cardImage:{
    padding:20,
    backgroundColor:'#fff'
  },
  cartText:{
    fontSize:15,
    padding:16
  }
})