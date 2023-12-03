import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  constructor() { }
  ngOnInit() { }

  handleSubmit(contactForm: NgForm){
    console.log(contactForm.value);
    console.log(contactForm.value.message);
  }
}
