import { AuthService } from 'src/app/core/authentication/auth.service';
import { APIResponse } from './../../shared/models/api-response';
import { Item } from '../../shared/models/item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private API_URL: string = 'https://caviar-honey.herokuapp.com/api/v1/items/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  _handleHTTPError = (res: HttpErrorResponse): Observable<APIResponse> => {
    if (res.error.error?.name === 'TokenExpiredError') {
      window.alert('Your session has expired');
      this.authService.logout();
    }

    return of(res.error);
  };

  getAllItems(): Observable<APIResponse<Item[]>> {
    return this.http
      .get<APIResponse<Item[]>>(this.API_URL)
      .pipe(catchError(this._handleHTTPError));
  }
  getItemById(id: string): Observable<APIResponse<Item>> {
    return this.http
      .get<APIResponse<Item>>(this.API_URL + id)
      .pipe(catchError(this._handleHTTPError));
  }
  createItem(item: Item): Observable<APIResponse<Item>> {
    return this.http
      .post<APIResponse<Item>>(this.API_URL, item)
      .pipe(catchError(this._handleHTTPError));
  }

  updateItem(item: Item): Observable<APIResponse<Item>> {
    return this.http
      .put<APIResponse<Item>>(this.API_URL + item._id, item)
      .pipe(catchError(this._handleHTTPError));
  }

  deleteItem(item: Item): Observable<APIResponse<Item>> {
    return this.http
      .delete<APIResponse<Item>>(this.API_URL + item._id)
      .pipe(catchError(this._handleHTTPError));
  }
}
