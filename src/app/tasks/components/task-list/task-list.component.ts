import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() tasks: Task[];
  @Output() removeTask: EventEmitter<string>;
  @Output() toggleTask: EventEmitter<string>;

  constructor() {
    this.tasks = [];
    this.removeTask = new EventEmitter<string>();
    this.toggleTask = new EventEmitter<string>();
  }
}
