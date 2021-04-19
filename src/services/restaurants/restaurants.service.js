import {mocks} from './mock/index'
import camelize from 'camelize'



export const restaurantsRequest=(location="37.7749295,-122.4194155",)=>{
// mimic the real api call because the mock[location] returns
// almost immediately because it is local
  return new Promise((resolve,reject)=>{
      const mock =mocks[location]
     if(!mock){
      reject('no location')
     }
     resolve(mock)
  })    
}

export const restaurantsTransform= ({results=[]})=>{
  // return camelize(result)
  const mappedResults = results.map(restaurant=>{
    return{
      ...restaurant,
      isOpen:restaurant.opening_hours&& restaurant.opening_hours.open_now,
      isClosedTemporarily:restaurant.business_status="CLOSEDTEMPORARILY"
    }
  })
  return camelize(mappedResults)
}

  
