import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackendDataService {
  
  constructor(public http:HttpClient) { }
  
  getPaintings(){
    return this.http.get<any>('http://localhost:3000/paintings');
  }
}
