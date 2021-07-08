import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiProps } from './info.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getProps() {
    console.log(this._httpClient.get<ApiProps>('http://localhost:8080/starter-api/api/info'));
    
    return this._httpClient.get<ApiProps>('http://localhost:8080/starter-api/api/info');
  }

}
