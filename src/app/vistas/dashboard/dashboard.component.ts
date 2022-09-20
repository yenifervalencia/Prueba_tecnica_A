import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { Router } from '@angular/router';
import { Users } from 'src/app/modelos/users.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    usuarios:Users[]=[];
 
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getUsers(1).subscribe(data=>{
      this.usuarios=data;
    })
  }

  verUsuario(id: string){
this.router.navigate(["viewUser",id]);
  }

}
