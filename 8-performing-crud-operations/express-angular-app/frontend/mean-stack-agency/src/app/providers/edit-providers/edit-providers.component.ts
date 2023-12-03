import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from '../../services/provider.service';
import { ProviderClass } from '../../models/provider.class';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-edit-providers',
  templateUrl: './edit-providers.component.html',
  styleUrl: './edit-providers.component.css'
})
export class EditProvidersComponent {

  constructor(private providerService: ProviderService, private route: ActivatedRoute) {
    this.providersForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl(),
      position: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/\+65(6|8|9)\d{7}/g)]),
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
  emailError = false;
  emailErrorMessage = 'Email already exists';
  providers: ProviderClass[] = []; // Initialize as an empty array
  provider = new ProviderClass();
  providersForm: FormGroup;

  id: number = 0; // service provider's id from url
  email: string = ''; // service provider's default email
  ready = false; // flag to check if data is ready

  ngOnInit(): void {
    this.loadData();
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));

      this.providerService.getProvider(this.id).subscribe(
        data => {
          this.provider = data[0];
          console.log(data);
          // flatten object
          const temp: { [key: string]: any } = {};
          for (const [k1,v1] of Object.entries(this.provider)) {
            switch(k1){
              case '_id' || 'id' : break;
              case 'company':
                for (const [k2,v2] of Object.entries(this.provider[k1])) {
                  if (k2 != "_id") {
                    temp[k2] = v2;
                  }
                }
                break;
                default:
                  temp[k1] = v1;
            }
          }
          console.log(temp);

          setTimeout(() => {
            this.providersForm.patchValue(temp);
            this.ready = true;
          }, 1000)

        }, error => {
          console.log(error);
        }
      )

    });
  }

  handleSubmit() {
    console.log(this.providersForm.value);
    this.submitted = true;
    this.buildProvider();

    if (!this.isInvalidEmail()) {
      this.providerService.updateProvider(this.id, this.provider).subscribe({
        next: (data) => {
          this.submitted = true;
          this.emailError = false;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
    this.submitted = false;
  }

  // Check for duplicate emails
  isInvalidEmail() {
    let email = this.providersForm.get('email')?.value;
    if (this.email == email && this.providers.filter((provider) => provider.company.email === email).length > 0) {
      this.emailError = true;
      return true;
    } else {
      this.emailError = false;
      return false;
    }
  }

  // method to easy access form controls
  get f() { return this.providersForm.controls; }

  // Generate new ID
  getNewId() {
    let newId: number;

    while (true) {
      newId = Math.floor(Math.random() * 1000 + 99999);
      if (this.providers.findIndex((provider) => provider.id === newId) === -1) {
        return newId;
      }
    };
  }

  // Build new provider object
  buildProvider() {
    let p = this.providersForm.value;
    this.provider.id = this.getNewId();
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
  }

  loadData() {
    this.providerService.getAllProviders().subscribe((data: ProviderClass[]) => {
      this.providers = data;
    }, (error) => {
      console.log(error);
    });
  }
}
