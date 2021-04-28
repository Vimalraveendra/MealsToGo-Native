import React from 'react';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';

import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screens'
import RestaurantsDetailScreen from '../../features/restaurants/screens/restaurantsDetail.screen'

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator =()=>{
    return(
        <RestaurantStack.Navigator headerMode="none" screenOptions={{
            ...TransitionPresets.ModalPresentationIOS
        }}>
          <RestaurantStack.Screen name="Restaurants" component={RestaurantsScreen} />
          <RestaurantStack.Screen name="RestaurantsDetail" component={RestaurantsDetailScreen} />
          
        </RestaurantStack.Navigator>
    )
}

export default RestaurantsNavigator;