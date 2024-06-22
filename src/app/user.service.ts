import { Injectable, computed, signal } from '@angular/core';

export interface IUser{
  name: string,
  company:string,
  address:string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userSignal = signal<IUser>({
    name:'Kumar',
    company:'Programming',
    address:'United Kingdom'
  });

  get user(){
    return this.userSignal();
  }

  updateUser(newUser: Partial<IUser>){
    this.userSignal.update((currentUser)=>{ return ({...currentUser , ...newUser})});
  }

  getUserDetails(){
    return computed(()=>{ 
      return `${this.user.name} works at ${this.user.company} and lives in ${this.user.address}.`
    })
  }
}
