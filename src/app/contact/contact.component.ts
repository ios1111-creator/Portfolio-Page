import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  form!: FormGroup;

  constructor() {
  }

  ngOnInit() {
    // this.form = new FormGroup({
    //   'firstName': new FormControl(null,[ Validators.required]),
    //   'email': new FormControl(null,[Validators.required, Validators.email]),
    //   'message': new FormControl(null, [Validators.required, Validators.minLength(5)])
    //
    // })
  }

  submitForm() {
  }
}
