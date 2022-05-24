import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
// import { Form } from '@angular/forms'  // ***
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;  // !: -> ***
  day!: string;
  reminder: boolean = false;
  showAddTask!: Boolean;
  subscription!: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  False = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {}

  onSubmit() {

    if (!this.text) {
      alert("Please add a task!");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = this.False;
    
  }
}
