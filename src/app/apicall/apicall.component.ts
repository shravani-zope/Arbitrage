import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApicallService, Autocomplete } from '../apicall.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})


export class ApicallComponent implements OnInit {
  
autocomplete:Autocomplete[]
quotess:Autocomplete["quotes"][]
//quotes:Autocomplete["quotes"]
  
  constructor(private _serv : ApicallService) { }

  ngOnInit(): void{

    //var no = this._serv.getnumber()
    this._serv.apicallsuccess().subscribe(
  
      Response => {
        let quotess=Response["quotes"];
        //let quote=quotes[];
        console.log(quotess);
        //this.autocomplete=Response;
        this.quotess=Response.quotes;
      }
    );
  }
  }
  



