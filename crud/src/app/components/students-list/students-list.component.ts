import { Component, OnInit } from '@angular/core';
import { Student } from '../../student';
import { StudentService } from '../../services/student.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];

  constructor(private service: StudentService){}

  ngOnInit(): void {
      this.getStudents();
  }

  getStudents(){
    this.service.getStudentsList().subscribe(
      data => {
        console.log(data);
        this.students = data;
      }
    );
  }
}


