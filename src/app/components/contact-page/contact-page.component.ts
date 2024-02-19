import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit{
  constructor(private contactService: ContactService) {

  }

  contactForm = new FormGroup({
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    role: new FormControl<string>('', Validators.required),
    message: new FormControl<string>('', Validators.required)
  })

  ngOnInit(): void {

  }

  onSubmit(form: any):void {
    console.log(form.value);
    this.contactService.sendContactForm(form.value).subscribe((res: Contact) => console.log(res));
  } 
}
