import { Component, OnInit } from '@angular/core';

import { ApiProps } from './info.model';
import { InfoService } from './info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: [
  ]
})
export class InfoComponent implements OnInit {

  version = '21.07';

  apiProps: ApiProps = {"time":"2021-01-01","version":"0.0",
      "artifact":"starter","name":"SIN CONEXION","group":"mosaic"};
 
      constructor( private _infoService: InfoService ) { }

      ngOnInit(): void {
        this._infoService.getProps()
          .subscribe( props => this.apiProps = props );
      }
    
}
