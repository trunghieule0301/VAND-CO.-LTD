import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiEnviroment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    
  constructor(private http: HttpClient, private spinnerService: SpinnerService) { }
    
  getAll(payload?: any): Observable<any> {
    this.spinnerService.show()
    return this.http.get<any>(`${apiEnviroment}/pokemons?page[number]=${payload.pageNumber}
    &page[size]=${payload.pageSize}
    ${payload.sortType ? '&sort=' + payload.sortType : ''}
    ${payload.numberType ? '&sort=' + payload.numberType : ''}
    ${payload.filterType ? '&filter[type]=' + payload.filterType : ''}`).pipe(
      tap({
        next: () => this.spinnerService.hide(),
        error: () => this.spinnerService.hide(),
        complete: () => this.spinnerService.hide()
      }));
  }

  getAllTypes(): Observable<any[]> {
    this.spinnerService.show()
    return this.http.get<any>(`${apiEnviroment}/types`).pipe(
      tap({
        next: () => this.spinnerService.hide(),
        error: () => this.spinnerService.hide(),
        complete: () => this.spinnerService.hide()
      }));
  }
  
  getDetailById(payload?: any): Observable<any> {
    this.spinnerService.show()
    return this.http.get<any>(`${apiEnviroment}/pokemons/${payload.id}`).pipe(
      tap({
        next: () => this.spinnerService.hide(),
        error: () => this.spinnerService.hide(),
        complete: () => this.spinnerService.hide()
      }));
  }

  getSpriteById(payload?: any): Observable<any> {
    this.spinnerService.show()
    return this.http.get<any>(`${apiEnviroment}/pokemons/${payload.id}/sprite`,{ responseType: 'blob' as 'json'}).pipe(
      tap({
        next: () => this.spinnerService.hide(),
        error: () => this.spinnerService.hide(),
        complete: () => this.spinnerService.hide()
      }));
  }
}