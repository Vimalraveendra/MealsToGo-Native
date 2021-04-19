import React ,{useState,useEffect,useContext,useMemo} from 'react';
import { createContext } from 'react';

import {restaurantsRequest,restaurantsTransform} from './restaurants.service'


export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children})=>{
    return(
        <RestaurantsContext.Provider value={{restaurants:[1,2,3]}}>
         {children}
        </RestaurantsContext.Provider>
    )   
}