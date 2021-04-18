import {mocks} from './mock/index'
import camelize from 'camelize'



export const restaurantsRequest=(location="37.7749295,-122.4194155",)=>{
// mimic the real api call because the mock[location] returns
// almost immediately because it is local
  return new Promise((reject,resolve)=>{
      const mock =mocks[location]
     if(!mock){
      reject('no location')
     }
     resolve(mock)
  })    
}

const restaurantsTransform= (result)=>{
  return camelize(result)
}

restaurantsRequest().then(restaurantsTransform).then(transformedResponse=>{
  console.log(transformedResponse)
}).catch((error)=>console.log(error))
    
