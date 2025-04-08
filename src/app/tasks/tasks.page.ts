import { Component } from '@angular/core';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks-page',
  imports: [TaskInputComponent, TaskListComponent],
  styles: [
    `
      h2 {
        text-align: center;
        color: #333;
      }

      ul {
        padding: 0;
      }
    `,
  ],
  template: `
    <h2>📝 Lista de Tareas</h2>
    <app-task-input (insertTask)="onAddTask($event)"></app-task-input>
    <app-task-list
      [tasks]="tasks"
      (removeTask)="onRemoveTask($event)"
      (toggleTask)="onToggleDone($event)"
    >
    </app-task-list>
  `,
})
export class TasksPage {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.findAll();
  }

  onAddTask(taskData: { title: string; description?: string }) {
    this.taskService.insert(taskData.title, taskData.description);
    this.tasks = this.taskService.findAll();
  }

  onRemoveTask(id: string) {
    this.taskService.remove(id);
    this.tasks = this.taskService.findAll();
  }

  onToggleDone(id: string) {
    this.taskService.toggle(id);
    this.tasks = this.taskService.findAll();
  }
}
