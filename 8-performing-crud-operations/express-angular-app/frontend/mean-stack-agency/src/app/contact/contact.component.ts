import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  constructor() {
    this.firstname = '';
    this.lastname = '';
    this.phone = '';
    this.message = '';
  }
  
  ngOnInit() { }

  // Define properties for the form fields
  firstname: string;
  lastname: string;
  phone: string;
  message: string;

  handleSubmit(contactForm: NgForm){
    console.log(contactForm.value);
    console.log(contactForm.value.message);
  }
}
