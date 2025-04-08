import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css',
})
export class TaskInputComponent {
  title: string;
  description?: string;

  @Output() insertTask: EventEmitter<{ title: string; description?: string }>;

  constructor() {
    this.title = '';
    this.description = '';

    this.insertTask = new EventEmitter<{
      title: string;
      description?: string;
    }>();
  }

  emitTask(): void {
    if (this.title.trim())
      this.insertTask.emit({
        title: this.title.trim(),
        description: this.description?.trim(),
      });

    this.title = '';
    this.description = '';
  }
}
