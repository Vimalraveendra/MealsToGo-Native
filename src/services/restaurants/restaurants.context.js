import React ,{useState,useEffect,useContext,useMemo} from 'react';
import { createContext } from 'react';

import {restaurantsRequest,restaurantsTransform} from './restaurants.service'


export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children})=>{
    const [restaurants,setRestaurants] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
  
    const retrieveRestaurants= ()=>{
        setIsLoading(true)
// we are going to act it like a real API & we are going to
// wait for our response to come back.there is no latency on
// retrieving our local objects.
        setTimeout(()=>{
           restaurantsRequest().then(restaurantsTransform).then(restaurantsResponse=>{
               setIsLoading(false)
               setRestaurants(restaurantsResponse)
           }).catch(error=>{
               setIsLoading(false)
               setError(error)      
           })
        },2000)
    }
     useEffect(() => {
        retrieveRestaurants()
     }, [])

    return(
        <RestaurantsContext.Provider value={{
            isLoading:isLoading,
            restaurants:restaurants,
            error:error
        }}>
         {children}
        </RestaurantsContext.Provider>
    )   
}