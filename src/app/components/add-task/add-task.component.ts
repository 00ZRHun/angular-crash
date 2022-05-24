import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;  // !: -> ***
  day!: string;
  reminder!: boolean;

  constructor() {}

  ngOnInit(): void {}

}
