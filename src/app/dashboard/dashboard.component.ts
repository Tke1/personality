import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../dog';
import { DogService} from '../dog.service';

@Component({
  selector: 'cg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dogs: Observable<Dog[]>;

  constructor(svc: DogService) {
    this.dogs = svc.dogList();
  }

  ngOnInit() {
}
}
