import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
