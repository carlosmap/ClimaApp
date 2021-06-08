import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';
import { Paises} from '../interfaces/paises';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
/*
  paises: Paises= {     
    pais: '' 
  };
*/
  API_ENDPOINT="http://127.0.0.1:8000/api";
  paises: Paises[] =[];
  constructor(private paisesService:PaisesService, private httpClient: HttpClient) { 
    httpClient.get(this.API_ENDPOINT+'/listadoPaises').subscribe( (data: any) => {
      this.paises =data;
    });
  }
  ngOnInit(): void {
  }

}
