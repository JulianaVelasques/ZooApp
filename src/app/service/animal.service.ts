// Angular Modules
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJs
import { Observable } from 'rxjs';
import { Animals } from '../shared/model/animals.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  apiUrl = 'https://zoo-animal-api.herokuapp.com/animals/rand/';

  constructor(
    // Angular Modules
    private http: HttpClient
  ) {}

  public get(number: string): Observable<any> {
    return this.http.get(this.apiUrl + number);
  }

  //   public post = (url: string, data: any, options?: any): Observable<any> =>
  //     this.http.post(url, data, options);

  //   public put = (url: string, data: any, options?: any): Observable<any> =>
  //     this.http.put(url, data, options);

  //   public delete = (url: string, options?: any): Observable<any> =>
  //     this.http.delete(url, options);
}
