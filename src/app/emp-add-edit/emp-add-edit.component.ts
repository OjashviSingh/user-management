import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
education: string[] = [
  'Junior-high School',
  'High School',
  'Graduate',
  'Post Graduate',
  'PhD'
]
}
