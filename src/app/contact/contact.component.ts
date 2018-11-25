import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

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


export class ContactComponent {
   lat: number = 38.294958;
  lng: number = -92.492359;

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
}
