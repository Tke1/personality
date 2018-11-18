import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'cg-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  isNonLinear = false;
  formGroup: FormGroup;
  shortResponses: string[] = ['Yes', 'No'];
  livingConditions: string[] = ['apartment/condominium with private balcony/deck', 'apartment/condominium no balcony/deck',
   'detached/townhouse house with yard', 'detached house surrounded by woods'];

   get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

   constructor(private fb: FormBuilder) {}

   ngOnInit() {
    this.formGroup = this.fb.group({
      formArray: this.fb.array([
        this.fb.group({
          dogs: [Validators.required],
          animals: [Validators.required],
          kids: [Validators.required],
          living: [Validators.required],
        }),

       ])
  });

}
}
