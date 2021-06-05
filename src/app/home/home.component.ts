import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {EstadosService} from '../services/estados.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  API_ENDPOINT='http://127.0.0.1:8000/api/';
/*
  constructor(private estadosService: EstadosService, private httpClient: HttpClient ) { 
    httpClient.get(this.API_ENDPOINT+'usuarios').subscribe((data)=>{
//      console.log(data);
    });
  }
*/
  constructor()
  {
    
  }
  ngOnInit(): void {
  }

}
