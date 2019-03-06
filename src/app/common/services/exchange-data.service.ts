import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ExchangeDataService {
  requestDataUpdate = new Subject<string>();
}
