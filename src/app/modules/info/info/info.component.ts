import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [
  ]
})
export class InfoComponent implements OnInit {

  version = '21.07';

  constructor() { }

  ngOnInit(): void {
  }

}
