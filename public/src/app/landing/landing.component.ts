import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user: any;
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
  	this._apiService.userData.subscribe((dataFromService:any)=>{
  		console.log(dataFromService);

  		if(dataFromService== null){
  			// need to redirect to /login
  			this._router.navigate(['/login']);
  		}else{
  			console.log('found the user');
  			this.user = dataFromService;
  		}
  	})
  	this._apiService.getCurrentUser();
  }

}
