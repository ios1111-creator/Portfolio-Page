import {FormGroup, Validators, FormBuilder} from "@angular/forms";

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  submitForm() {
  }
}
