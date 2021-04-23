import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './login/login.model';
export class Autocomplete{
  constructor(
    public quotes
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  
  constructor(private _http :HttpClient) { }

  // public getnumber()
  //   {
  //     return 1;
  //   };

  public apicallsuccess():Observable<any>{
    let httpHeaders=new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json',
    });
    
    httpHeaders=httpHeaders.append('x-rapidapi-key','34cbc3a367msh3842a0ab665bfd1p164498jsne3f9d7f77d85');
    httpHeaders=httpHeaders.append('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com');
    return this._http.get("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US",{headers:httpHeaders});

  }

  
}
