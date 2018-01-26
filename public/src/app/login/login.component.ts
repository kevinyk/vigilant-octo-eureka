import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {name:''};
  constructor(private _router:Router, private _apiService:ApiService) { }

  ngOnInit() {
  	this._apiService.userData.subscribe((dataFromService)=>{
  		console.log(dataFromService);
  		if(dataFromService != null){
  			this._router.navigate(['/']);
  		}else{
  			console.log('idk what went wrong');
  			console.log(dataFromService);
  		}
  	})
  }
  login(){
  	this._apiService.loginUser(this.user);
  }

}
