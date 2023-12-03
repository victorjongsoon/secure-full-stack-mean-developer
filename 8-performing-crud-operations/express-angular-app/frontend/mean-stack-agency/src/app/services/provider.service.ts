import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProviderClass } from '../models/provider.class';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }
  // URL Endpoint to Express app
  apiUrl = 'http://localhost:3000/api/providers';

  // Get all providers
  getAllProviders(): Observable<any> { 
    return this.http.get(`${this.apiUrl}`);
  } 

  // POST - add a new record
  addProvider(newProvider: ProviderClass): Observable<any> {
    return this.http.post(`${this.apiUrl}`, newProvider);
  }

}
