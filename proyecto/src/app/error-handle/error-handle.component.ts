import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-handle',
  templateUrl: './error-handle.component.html',
  styleUrls: ['./error-handle.component.scss']
})
export class ErrorHandleComponent implements OnInit {

  constructor() { console.log("handle")}

  ngOnInit() {
  }

}
