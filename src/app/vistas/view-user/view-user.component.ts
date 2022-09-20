import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {album, posts}from '../../modelos/users.interface';
import { ApiService } from 'src/app/servicios/api.service';
import { FormGroup,FormControl } from '@angular/forms';
import { LiteralExpr } from '@angular/compiler';



@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  usuario:any;
  posts:posts[]=[];
  Nposts:number=0;
  album:album[]=[];

VerForm=new FormGroup({
  name:new FormControl(''),
  Nposts:new FormControl(''),
  ListAlbum:new FormControl('')
});



  ngOnInit(): void {
    

    let userId= this.activerouter.snapshot.paramMap.get('id');

    this.api.getUser(userId).subscribe(data=>{
      this.usuario=data.name;  
      
    });

    this.api.getPostsUser(userId).subscribe(data=>{
      this.posts=data;
      this.Nposts=this.posts.length;
    
    });

    this.api.getAlbumsUser(userId).subscribe(data=>{
      this.album=data;
     
    });
  }

}
