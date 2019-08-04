import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { LoginPage } from '../login/login.page';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';
import { UserInterface } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private afs: AngularFirestore) {}
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData),
            this.updateUserData(userData.user)
        }).catch(err => console.log(reject(err)))
    });
  }
  loginFacebookUser() {
    return this.AFauth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }

  loginGoogleUser() {
    return this.AFauth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }

  logoutUser() {
    return this.AFauth.auth.signOut();
  }

  isAuth() {
    return this.AFauth.authState.pipe(map(auth => auth));
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      email: user.email,
      roles: {
        editor: true
      }
    }
    return userRef.set(data, { merge: true })
  }


  isUserAdmin(userUid) {
    return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }

  login(email:string, password:string){
    return new Promise((resolve,rejected)=>{
      this.AFauth.auth.signInWithEmailAndPassword(email,password).then(user =>{
      resolve(user);
    }).catch(err => rejected(err));
  });
  


  }
}
