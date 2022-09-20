import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { Users } from 'src/app/modelos/users.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ApiService) { }
usuario:Users[]=[];
Nuser:number=0;
posts:any;
NPosts:number=0;


  ngOnInit(): void {

    this.api.getUsers(1).subscribe(data=>{
      this.usuario=data;
      this.Nuser=this.usuario.length;
    })

    this.api.getPosts(1).subscribe(data=>{
      this.posts=data;
      this.NPosts=this.posts.length;
    })
  }

}
