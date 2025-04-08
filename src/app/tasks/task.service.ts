import { Injectable } from '@angular/core';
import { UuidGeneratorService } from '../shared/uuid-generator.service';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly uuidGenerator: UuidGeneratorService;
  private tasks: Task[] = [];

  constructor(uuidGenerator: UuidGeneratorService) {
    this.uuidGenerator = uuidGenerator;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findById(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  insert(title: string, description?: string): Task {
    const task: Task = {
      title,
      description,
      id: this.uuidGenerator.generate(),
      completed: false,
    };

    this.tasks.push(task);
    return task;
  }

  remove(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  toggle(id: string): void {
    const task = this.findById(id);

    if (task) {
      task.completed = !task.completed;
    }
  }
}
