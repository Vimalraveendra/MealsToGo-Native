import React,{useState,useEffect} from 'react'

import {locationRequest,locationTransform} from './location.service'

export const LocationContext = React.createContext();

export const LocationContextProvider=({children})=>{
    const[keyword,setKeyword] = useState("san francisco") 
    const[location,setLocation] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const[error,setError] = useState(null) 

    const onSearch = (searchKeyword)=>{
        setIsLoading(true)
        setKeyword(searchKeyword)
        
    }

 
useEffect(() => {

    if(!keyword.length){
        return;
    }
    locationRequest(keyword.toLowerCase())
    .then(locationTransform)
    .then(locationResponse=>{
        setIsLoading(false)
        setLocation(locationResponse)
    }).catch(error=> {
        setIsLoading(false)
        setError(error)
    })
   
    // return () => {
    //     cleanup
    // }
}, [keyword])

   return(  
       <LocationContext.Provider value={{
       isLoading:isLoading,
       error:error,
       location:location,
       search:onSearch,
       keyword:keyword
   }}>
     {children}
    </LocationContext.Provider>
   )
}