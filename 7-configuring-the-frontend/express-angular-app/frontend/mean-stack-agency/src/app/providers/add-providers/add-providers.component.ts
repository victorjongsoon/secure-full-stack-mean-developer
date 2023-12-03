import { Component, OnInit } from '@angular/core';
import { ProviderClass } from '../../models/provider.class';
import { FormGroup, FormControl } from '@angular/forms';
import { providers } from '../../models/providers.data';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styleUrl: './add-providers.component.css'
})
export class AddProvidersComponent implements OnInit {

  constructor() {
    this.providersForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      position: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      company_name: new FormControl(),
      address: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      postal_code: new FormControl(),
      description: new FormControl(),
      tagline: new FormControl(),
    })
  }
  
  submitted = false;
  provider = new ProviderClass();
  providersForm: FormGroup;

  ngOnInit(): void {

  }

  handleSubmit() {
    console.log(this.providersForm.value);
    this.submitted = true;
    let newId: number;

    while (true) {
      newId = Math.floor(Math.random() * 1000);
      if (providers.findIndex((provider) => provider.id === newId) === -1) {
        break;
      }
    };

    let p = this.providersForm.value;
    this.provider.id = newId;
    this.provider.firstname = p.firstname;
    this.provider.lastname = p.lastname;
    this.provider.position = p.position;

    this.provider.company = {
      company_name: p.company_name,
      email: p.email,
      city: p.city,
      state: p.state,
      phone: p.phone,
      address: p.address,
      address2: p.address2,
      postal_code: p.postal_code,
      tagline: p.tagline,
      description: p.description,
    };

    providers.push(this.provider);
    this.submitted = true;
  }
}


