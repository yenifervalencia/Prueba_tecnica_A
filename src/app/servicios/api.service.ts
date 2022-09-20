import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Users,album, posts} from './../modelos/users.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
url:string="https://jsonplaceholder.typicode.com/";

  constructor(private http:HttpClient) { }

  getUsers(page:number):Observable<Users[]>{
    let direccion=this.url + "users";
    return this.http.get<Users[]>(direccion);
  }
  getPosts(page:number):Observable<posts[]>{
    let direccion=this.url + "posts";
    return this.http.get<posts[]>(direccion);
  }
 
  getUser(id: any):Observable<Users>{
    let direccion=this.url + "users/" + id;
    return this.http.get<Users>(direccion);
  }
  getPostsUser(id: any):Observable<posts[]>{
    let direccion=this.url + "users/" + id + "/posts";
    return this.http.get<posts[]>(direccion);
  }
  getAlbumsUser(id: any):Observable<album[]>{
    let direccion=this.url + "users/" + id + "/albums";
    return this.http.get<album[]>(direccion);
  }

}
