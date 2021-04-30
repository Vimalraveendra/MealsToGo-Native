import React from 'react';


import CompactRestaurantInfo from '../../../../components/restaurant/compact-restaurant-info'



const MapCallout = ({restaurant})=>{
  
    return <CompactRestaurantInfo isMap restaurant={restaurant}/>

}

export default MapCallout;