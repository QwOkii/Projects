import { Component, OnInit } from '@angular/core';
import * as axios from 'axios';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit  {
  eventOne=21;
  eventTwo=1

  API = axios.default({
    baseURL:'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
  })
  elemn:any ={
    UAH:'UAH',
    EUR:'EUR',
    USD:'USD'
  }
  selectva1:string =''
  selectva2:string =''
 
  

  onChangeInputOne(){
    const select = document.querySelector('#courseOne')
    switch(this.selectva1){
      case'UAH':
      case'EUD':
      case'USD':
    }
    
  };
  onChangeInputTwo(){
    const select = document.querySelector('#courseTwo')
    this.API.then(R=>{
      R.data.array.forEach((element:any) => {
        if(element.cc ===this.selectva1){
          element
        }
        else{
          console.log('opa',this.selectva1,element.cc)
        }
        
      });
    })
    switch(this.selectva2){
      case'UAH':

      case'EUD':
      case'USD':
    }
  };

  ngOnInit(): void {
    
  }

}
