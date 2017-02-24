import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-reference-input',
  templateUrl: './reference-input.component.html',
  styleUrls: ['./reference-input.component.css']
})
export class ReferenceInputComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTrack(referenceId) {
    this.router.navigate(['/track', referenceId]);
  }
}
