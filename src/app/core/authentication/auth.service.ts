import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { APIResponse } from '../../shared/models/api-response';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL: string = 'https://caviar-honey.herokuapp.com';


  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  authToken?: string;
  expiresAt?: Date;

  constructor(private http: HttpClient, private router: Router) {
    this.autoLogin();
    this.autoLogout();
  }

  login(data: any): Observable<APIResponse<User & string & Date>> {
    return this.http.post<APIResponse>(this.API_URL + '/login', data).pipe(
      tap((res) => {
        if (res.status === 'success') {
          this.isLoggedIn = true;
          this.authToken = res.data!['token'];
          this.expiresAt = res.data!['tokenExpires'];
          if (res.data!['user'].role === 'admin') {
            this.isAdmin = true;
          }
          this.saveToken(this.authToken, this.expiresAt);
          this.adminToken(res.data!['user'].role!);

          // this.autoLogout();
        }
      })
    );
  }

  register(data: any): Observable<APIResponse<User & string & Date>> {
    return this.http.post<APIResponse>(this.API_URL + '/register', data).pipe(
      tap((res) => {
        if (res.status === 'success') {
          this.isLoggedIn = true;

          this.authToken = res.data!['token'];
          this.expiresAt = res.data!['tokenExpires'];

          this.saveToken(this.authToken, this.expiresAt);
          // this.autoLogout();
        }
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
    this.authToken = undefined;

    localStorage.removeItem('authToken');
    localStorage.removeItem('expiresAt');

    this.router.navigate(['/login']);
  }

  private autoLogout(): void {
    // let dateFromStorage = localStorage.getItem('expiresAt');
    // if (!this.expiresAt && !dateFromStorage) return;
    // this.expiresAt = new Date(this.expiresAt!) || new Date(dateFromStorage!);
    // setTimeout(() => {
    //   this.logout();
    //   window.alert('Your session has expired');
    // }, this.expiresAt.getTime() - Date.now());
  }

  private autoLogin(): void {
    let authToken = localStorage.getItem('authToken');
    let admin = localStorage.getItem('admin');
    if (admin === 'admin') {
      this.isAdmin = true;
    }
    console.log(admin);
    if (authToken) {
      this.isLoggedIn = true;
      this.authToken = authToken;
    }
  }

  private saveToken(token: string, expiresAt: Date): void {
    localStorage.setItem('authToken', token);
    localStorage.setItem('expiresAt', JSON.stringify(expiresAt));
  }

  private adminToken(payload: string): void {
    localStorage.setItem('admin', payload);
    console.log(payload);
  }
}
