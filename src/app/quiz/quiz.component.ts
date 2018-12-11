import {
  Component,
  OnInit
} from '@angular/core';
import {Router} from '@angular/router';
import {
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
  formGroup4: FormGroup;


  shortResponses: string[] = ['Yes', 'No'];
  livingConditions: string[] = ['Apartment/Condominium with Private Balcony/Deck', 'Apartment/Condominium no Balcony/Deck',
    'Detached/Townhouse with Yard', 'Detached House Surrounded by Woods'
  ];
  challenges: string[] = ['Be able to work with a pet', 'Not at all'];
  levels: string[] = ['Active', 'Couch potato', 'Neither'];
  interactions: string [] = ['Extremely important', 'Somewhat important', 'Not at all'];
  practices: string [] = ['Already trained', 'Easy to train', 'Take the challenge'];

  constructor(private fb: FormBuilder, private router: Router) {}


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
    this.formGroup4 = this.fb.group({
      energy: [Validators.required],
      social: [Validators.required],
      train: [Validators.required],
      comfort: [Validators.required],
    });
  }
  dashboard() {
    this.router.navigate(['./dashboard']);
  }

}
