import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {
  
  private user: firebase.User;
  constructor(private afAuth :  AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

    // Registro de usuario
  registerUser(usuario:any){
    return this.afAuth.auth.createUserWithEmailAndPassword( usuario.email, usuario.password)
      .then((res)=>{
      this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.password)
    })
    .then(user=>Promise.resolve(user))
    .catch(err=>Promise.reject(err))
 }

 // Login de usuario
loginUser(usuario:any){
   return this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.password)
     .then(user=>Promise.resolve(user))
     .catch(err=>Promise.reject(err))
 }

 // Logout de usuario
 logout(){
   this.afAuth.auth.signOut().then(()=>{
     // hemos salido
   })
 }

// Devuelve la session
 get Session(){
  return this.afAuth.authState;
 }
 get authenticated(): boolean {
  return this.user !== null;
}


}