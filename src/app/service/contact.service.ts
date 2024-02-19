import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }; 

  sendContactForm(info: any): any {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`http://localhost:8080/contact/sent`, { ...info }, { headers });
  };

  getAllContactForms(): any {
    return this.http.get(`http://localhost:8080/contact/contacts`);
  }
}
