import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UuidGeneratorService {
  generate() {
    return crypto.randomUUID();
  }
}
