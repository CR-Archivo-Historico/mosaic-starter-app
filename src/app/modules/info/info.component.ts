import { Component, OnInit } from '@angular/core';

import { ApiProps } from './info.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [
  ]
})
export class InfoComponent implements OnInit {

  version = '21.07';

  apiProps: ApiProps = {"time":"2021-07-08","version":"0.0","artifact":"starter","name":"starter","group":"mosaic"};
 
  constructor() { }

  ngOnInit(): void {
  }

}
