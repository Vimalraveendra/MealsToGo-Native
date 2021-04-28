import * as React from 'react';
import MapView from 'react-native-maps';
import { View} from 'react-native';  
import styled from 'styled-components/native'

import {Search} from '../components/search.component'

const Map =styled(MapView)`
width:100%;
height:100%;
`;  

console.log("search",Search)
const MapScreen=()=> {
    return (
      <View>
       <Search/>
        <Map/>
      </View>
    );
  }

  export default MapScreen; 
  
  
