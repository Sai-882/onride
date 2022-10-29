import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
username=undefined;
city=undefined;
  document: any;

  constructor(@Inject(DOCUMENT) document:Document) {
    this.document=document;
   }

  ngOnInit(): void {
  }
  vinfo(event:any){
    if(this.document.getElementById('username').value&& this.document.getElementById('city').value){
      return alert('Searching For Vehicles');

  }else{
    alert('enter correct location')
  }

  }
}
