import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  userId:number,
  userName: string,
  fullName: string,
  idToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login() {
    return this.http.get<AuthResponseData>(
      'http://sgs-jed052:890/api/account/login',{withCredentials: true}
    );
  }
}
