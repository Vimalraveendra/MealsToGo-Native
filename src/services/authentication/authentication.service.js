import * as firebase from 'firebase'; 


export const loginFunction=(email,password)=>{
 firebase.auth().signInWithEmailAndPassword(email,password)
}
