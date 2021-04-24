import React,{useState,useEffect} from 'react'

import {locationRequest,locationTransform} from './location.service'

export const LocationContext = React.createContext();

export const LocationContextProvider=({children})=>{
    const[keyword,setKeyword] = useState("san francisco") 
    const[location,setLocation] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const[error,setError] = useState(null) 

    const onSearch = (searchKeyword='Antwerp')=>{
        console.log("hello")
        setIsLoading(true)
        setKeyword(searchKeyword)
        locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then(locationResponse=>{
            setIsLoading(false)
            setLocation(locationResponse)
            console.log(locationResponse)
        }).catch(error=> {
            setIsLoading(false)
            setError(error)
        })
    }

     useEffect(() => {
       onSearch(keyword)
     }, [])


   return(  
       <LocationContext value={{
       isLoading:isLoading,
       error:error,
       location:location,
       search:onSearch,
       keyword:keyword
   }}>
     {children}
    </LocationContext>
   )
}