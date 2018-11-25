import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Marker {
  lat: number;
  lng: number;
  draggable: boolean;
  }


@Component ({
  selector: 'cg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  zoom: number = 8;
  lat: number = 38.627003;
  lng: number = -90.199402;
  firstGroup: FormGroup;

  markers: Marker[] = [
    {
      lat: 38.627003,
      lng: -90.199402,
      draggable: false
    }
  ];
  clickedMarker(index: number) {
    console.log(`clicked the marker: ${index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  // contact form
  constructor(private fb: FormBuilder) {}

  ngOnInit () {
  this.firstGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
    SecondCtrl: ['', Validators.required],
    ThirdCtrl: ['', Validators.required],
    FourthCtrl: ['', Validators.required]
  });
}
}
