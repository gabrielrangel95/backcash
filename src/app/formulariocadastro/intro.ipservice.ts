import {Observable} from 'rxjs/Rx';
import { Injectable }     from '@angular/core';
import { IpRecivedModel } from './intro.iprecivedmodel'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class IpService{

  constructor(private http: HttpClient) {

  }

  getIp():Observable<IpRecivedModel>{
    return this.http.get<IpRecivedModel>('https://freegeoip.net/json/?callback=')

  }
}
