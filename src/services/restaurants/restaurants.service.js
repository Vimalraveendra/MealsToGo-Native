import {mocks,mockImages} from './mock/index'
import camelize from 'camelize'



export const restaurantsRequest=(location)=>{
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
     restaurant.photos= restaurant.photos.map((p)=>{
       // Math.ceil() rounded a number upward to its nearest integer
      //  Math.ceil(5.4) =6
       return mockImages[Math.ceil(Math.random()*(mockImages.length-1))]
     });
    return{
      ...restaurant,
      address:restaurant.vicinity,
      isOpen:restaurant.opening_hours&& restaurant.opening_hours.open_now,
      isClosedTemporarily:restaurant.business_status==="CLOSEDTEMPORARILY"
    }
  })
  return camelize(mappedResults)
}

  
