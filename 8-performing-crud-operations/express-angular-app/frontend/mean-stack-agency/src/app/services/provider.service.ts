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

  // Get one provider
  getProvider(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // PUT - update a record
  updateProvider(id: number, provider: ProviderClass): Observable<ProviderClass> {
    return this.http.put<ProviderClass>(`${this.apiUrl}/${id}`, provider);
  }

  // POST - add a new record
  addProvider(newProvider: ProviderClass): Observable<any> {
    return this.http.post(`${this.apiUrl}`, newProvider);
  }

  // DELETE - delete a record
  deleteProvider(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
