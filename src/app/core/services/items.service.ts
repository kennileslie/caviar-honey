import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/shared/models/api-response';
import  { Item } from 'src/app/shared/models/item'
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private readonly API_URL: string = 'http://localhost:8080/api/v1/items/';

  constructor(private http: HttpClient) {}

  getAllItems(): Observable<APIResponse<Item[]>> {
    return this.http.get<APIResponse<Item[]>>(this.API_URL);
  }

  getItemById(id: string): Observable<APIResponse<Item>> {
    return this.http.get<APIResponse<Item>>(this.API_URL + id);
  }

  createItem(item: Item): Observable<APIResponse<Item>> {
    return this.http.post<APIResponse<Item>>(this.API_URL, item);
  }

  updateItem(item: Item): Observable<APIResponse<Item>> {
    return this.http.put<APIResponse<Item>>(
      this.API_URL + item._id,
      item
    );
  }

  deleteItem(item: Item): Observable<APIResponse> {
    return this.http.delete<APIResponse>(this.API_URL + item._id);
  }
}
