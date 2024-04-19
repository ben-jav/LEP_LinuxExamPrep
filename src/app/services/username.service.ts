import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  private username: string | undefined;

  constructor() { }

  setUsername(username: string) {
    this.username = username;
  }

  getUsername(): string {
    return this.username!;
  }
}
