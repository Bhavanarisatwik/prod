import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from './profile/profile';
@Component({
  selector: 'app-root',
  // imports: [Login, Signup, ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  count = 0;

  handleIncrement() {
    this.count = this.count + 1;
  }

  handleDecrment() {
    if (this.count > 0) {
      this.count = this.count - 1;
    }
  }

  handleReset() {
    this.count = 0;
  }
}
