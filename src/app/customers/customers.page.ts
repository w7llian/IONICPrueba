import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  lista: any = [];
  permisos: boolean;

  constructor( 
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit() {
    console.log("holaaaaaaa");
    this.permisos=true;
    this.getUsers().subscribe(res =>{
      console.log("RES",res)
      this.lista=res;
    });
  }

  gotoHome(){
    this.router.navigate(['/home']);
  }

  getUsers(){
    return this.http
    .get('assets/files/customers.json')
    .pipe(
      map((resp:any) =>{
        return resp.data;
      })
    )
  }

}
