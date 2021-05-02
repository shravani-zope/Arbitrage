import { NumberFormatStyle } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';


import { from, Observable } from 'rxjs';
import { ApicallComponent } from './apicall/apicall.component';
import { Users } from './login/login.model';

export class niftyfifty{
  constructor(

   public stocks:string[],

  ){}
}
export class quoteresponse{
  constructor(
    public longName:string,
    public quoteType:string,
    //public result:string[]
    public regularMarketPrice:number,
    public fullExchangeName:string,

  ){}
}


@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  NiftyFifty:niftyfifty[];
  QuoteResponse:quoteresponse[];
  myString: string;


  constructor(private _http :HttpClient) { }

  // public getnumber()
  //   {
  //     return 1;
  //   };


    public apicallsuccess(myString:string):Observable<any>{
    let httpHeaders=new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json',
    });

    //console.log(myString)
    let para = new HttpParams();
    para=para.append('region', "IN")
    para=para.set('symbols',myString)

    httpHeaders=httpHeaders.append('x-rapidapi-key','794fbb4305msh68abb39ab877827p17519ajsn9c3705bd0dcf');
    httpHeaders=httpHeaders.append('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com')

    return this._http.get("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes",{headers:httpHeaders,params:para});

   }




    public getniftyfifty():Observable<any>{
    let httpHeaders=new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json',
    });
    httpHeaders=httpHeaders.append('x-rapidapi-key','794fbb4305msh68abb39ab877827p17519ajsn9c3705bd0dcf');
    httpHeaders=httpHeaders.append('x-rapidapi-host', 'stock-market-data.p.rapidapi.com');


    return this._http.get("https://stock-market-data.p.rapidapi.com/market/index/nifty-fifty",{headers:httpHeaders});
  };











}
