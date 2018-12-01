import {
  Component,
  OnInit
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'cg-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  isNonLinear = false;

  formGroup: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;

  shortResponses: string[] = ['Yes', 'No'];
  livingConditions: string[] = ['apartment/condominium with private balcony/deck', 'apartment/condominium no balcony/deck',
    'detached/townhouse house with yard', 'detached house surrounded by woods'
  ];
  challenges: string[] = ['Be able to work with a pet', "Not at all"];



  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      dogs: [Validators.required],
      animals: [Validators.required],

    });
    this.formGroup2 = this.fb.group({
      kids: [Validators.required],
      living: [Validators.required],
    });
    this.formGroup3 = this.fb.group({
      care: [Validators.required],
      special: [Validators.required],
    });
  }
}
