import {FormGroup, Validators, FormBuilder} from "@angular/forms";

import {Component, OnInit} from '@angular/core';
import {DataStorageService} from "../data-storage.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private dataStorageService: DataStorageService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  submitForm() {
    const formData = this.form.value
    this.dataStorageService.saveContactData(formData).subscribe(()=>{
      console.log('Save Contact')
      this.form.reset()
      this.showSuccessToast()
    },
      (error => {
        console.error('error Contact',error)
        this.showErrorToast()
      }))
  }

 showSuccessToast(){
    this.toastr.success('Message sent successfully!', 'Success')
 }
 showErrorToast(){
    this.toastr.error('Error! Message not sent.', 'Error')
 }
}
