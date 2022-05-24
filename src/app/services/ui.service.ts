import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddButton: Boolean = false;
  private subject: Subject<any> = new Subject<any>();


  constructor() { }

  toggleAddTask(): void {
    this.showAddButton = !this.showAddButton;
    this.subject.next(this.showAddButton);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
