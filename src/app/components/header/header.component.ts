import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddButton: Boolean = false;
  subscription!: Subscription;
  
  constructor(private uiService: UiService, private router: Router) {  // bring in them as provider to constructor
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddButton = value));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string): Boolean {
    return this.router.url === route;
  }
}
