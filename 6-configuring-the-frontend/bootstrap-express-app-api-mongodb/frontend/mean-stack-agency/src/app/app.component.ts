import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AboutComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Victor Agency';
  nums = [10, 20, 11, 21]
  displayAfterClick = ""
  message = ""
  keyupMessage = ""
  twoWayBindingMessage = "This is two way binding message"

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
  
  show = true;
  toggle = () => {
    this.show = !this.show;
  }

  inc(){
    this.nums.push(Math.floor(Math.random() * 100));
  }

  dec(){
    this.nums.pop();
  }

}
