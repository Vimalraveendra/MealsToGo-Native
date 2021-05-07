import camelize from 'camelize'
// import {locations} from './location.mock'

export const locationRequest=(searchTerm)=>{
//  return new Promise((resolve,reject)=>{
//      const locationMock= locations[searchTerm]
//      if(!locationMock){
//          reject('Not Found')         
//      }
//       resolve(locationMock)
//  })
return fetch(`http://localhost:5001/mealstogo-b8f91/us-central1/geocode?city=${searchTerm}`)
.then((resp)=>{
    return resp.json()
}
    )

}   

export const locationTransform=(result)=>{
    const formattedResponse = camelize(result)
    const {geometry={}} = formattedResponse.results[0];
    const {lat,lng} = geometry.location;
   return{lat,lng,viewport:geometry.viewport}
}