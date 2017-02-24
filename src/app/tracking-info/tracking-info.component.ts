import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking-info',
  templateUrl: './tracking-info.component.html',
  styleUrls: ['./tracking-info.component.css']
})
export class TrackingInfoComponent implements OnInit {

  @Input() referenceId: string = '';

  private lat: number = -33.447487;
  private lng: number = -70.673676;
  private zoom: number = 12;

  constructor() { }

  ngOnInit() {
  }

}
