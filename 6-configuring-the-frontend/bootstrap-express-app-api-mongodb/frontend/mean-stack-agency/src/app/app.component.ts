import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Victor Agency';
  nums = [10, 20]
  displayAfterClick = ""
  message = ""
  keyupMessage = ""

  sum = () => {
    return this.nums[0] + this.nums[1]
  }
  red = 'color:red'
  green = 'color:green'

  clickMe = () => {
    console.log("You clicked me!")
    this.displayAfterClick = "You clicked me!"
  }

  showInputMessage = (message: string) => {
    console.log(message);
    if (message === "") {
      this.message = "No message was entered";
    } else {
      this.message = message;
    }
  };

  showKeyUpMessage = (message: string) => {
    console.log(message);
    this.keyupMessage = message;
  }
  


}
