import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './login/login.model';
import{HttpClient,HttpHeaders,HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http :HttpClient) { }

  public LoginUserFromRemote(user:Users):Observable<any>{
    /*let par = new HttpParams();
    par.append('q', "tesla");
    par.append('region', "US");
    let config = {
      headers: new HttpHeaders({
        //'Access-Control-Allow-Origin':"*",
        //'Content-Type':"application/json",
        'x-rapidapi-key':"34cbc3a367msh3842a0ab665bfd1p164498jsne3f9d7f77d85",
        'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com",
        'useQueryString': 'true'
      }),
      params: par
    };*/
    // var head = new HttpHeaders();
    // var par=new HttpParams();
    // par.append('q',"tesla")
    // par.append('region',"US")
    // head.append('Access-Control-Allow-Origin',"*");
    // head.append('Content-Type',"application/json");
    // head.append('x-rapidapi-key',"34cbc3a367msh3842a0ab665bfd1p164498jsne3f9d7f77d85");
    // head.append('x-rapidapi-host', "apidojo-yahoo-finance-v1.p.rapidapi.com");
    // head.append('useQueryString',"true"  );

    return this._http.post("http://localhost:8090/Login",user);


  }



// HTTP POST using these headers

}
