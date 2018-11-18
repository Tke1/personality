import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component ({
  selector: 'cg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  post: FormGroup;

  constructor(fb: FormBuilder) {
    this.post = fb.group({
    txtName: ['', Validators.required],
    txtEmail: ['', Validators.required],
    txtMsg: ['', Validators.required],
    });
  }
}
