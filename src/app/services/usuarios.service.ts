import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Usuarios} from '../interfaces/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_ENDPOINT="http://127.0.0.1:8000/api";
  constructor(private httpClient:HttpClient) { 
  }

  save(usuario:Usuarios ){
    console.log("datos : "+usuario);    
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'/usuarios',usuario,{headers: headers});
  }
}
