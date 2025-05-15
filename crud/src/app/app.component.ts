import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';
}
