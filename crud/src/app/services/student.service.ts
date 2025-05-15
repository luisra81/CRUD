import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient ) { }

  getStudentsList(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl + "/estudiantes");
  }
}
