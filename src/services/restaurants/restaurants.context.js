import React ,{useState,useEffect,createContext,useContext} from 'react';
import { LocationContext } from './location/location.context';


import {restaurantsRequest,restaurantsTransform} from './restaurants.service'


export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children})=>{
    const [restaurants,setRestaurants] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    const {location} = useContext(LocationContext)
  
    const retrieveRestaurants= (loc)=>{
        setIsLoading(true)
        setRestaurants([])
// we are going to act it like a real API & we are going to
// wait for our response to come back.there is no latency on
// retrieving our local objects.
        setTimeout(()=>{
           restaurantsRequest(loc).then(restaurantsTransform).then(restaurantsResponse=>{
               setIsLoading(false)
               setRestaurants(restaurantsResponse)
           }).catch(error=>{
               setIsLoading(false)
               setError(error)      
           })
        },2000)
    }
     useEffect(() => {
        if(location){
            const locationString = `${location.lat},${location.lng}`
            retrieveRestaurants(locationString)
        }
        
     }, [location])

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