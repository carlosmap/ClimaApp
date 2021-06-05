import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios';
import {UsuariosService} from '../services/usuarios.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  
  
  usuario: Usuarios= {
    nombre_usuario: '',
    apellido_usuario: '',
    email_usuario: '',
    password: '',
    id_estado_usuario: '1',
    id_perfil_usuario: '1'         
  };
  constructor(private router:Router, private usuariosServices : UsuariosService){      
  }

  saveUsuario()
  {
    
    this.usuariosServices.save(this.usuario).subscribe( (data)=> {
      alert("Registo exitodo");
      this.router.navigate(['home']);

      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }
  ngOnInit(): void {
    
  }

}

 