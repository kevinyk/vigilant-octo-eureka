import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ApiService {
  userData: BehaviorSubject<object> = new BehaviorSubject({});

  constructor(private _http: HttpClient) { }

  getCurrentUser(){
  	console.log('getCurrentUser');
	this._http.get('/api/current_user')
	.subscribe((responseData:any)=>{
    console.log('responseData', responseData);
		console.log(responseData);
		this.userData.next(responseData);
	})
  }
  loginUser(userObj){
  	console.log('loginUser');
  	this._http.post('/api/login', userObj)
  	.subscribe((responseData:any)=>{
  		console.log('responseData',responseData);
  		this.userData.next(responseData);
  	})
  }
}
