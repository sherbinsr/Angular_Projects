import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from './userData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor(private http:HttpClient){}

  private baseURL ="http://localhost:8080/user";

  private URL ="http://localhost:/8080/userid";

  
  getUserDataByUserId(id:number):Observable<UserData[]>
  {
    return this.http.get<UserData[]>(`${this.baseURL}/${id}`);
  }
   
  putDataToCurrentUser(id:number,userData:UserData):Observable<object>
  {
    return this.http.put(`${this.baseURL}/${id}`,userData);
  }
  deleteUserData(userDataId:number):Observable<object>
  {

    return this.http.delete(`${this.baseURL}/${userDataId}`);
  }


}
