import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  
  title = 'Apollo GraphQL Angular Example';

  private GET_RATES = gql `
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
  `

  constructor(private apollo: Apollo){

  }
    ngOnDestroy(): void {
        //throw new Error('Method not implemented.');
    }

  ngOnInit(): void {

  }

  btnGetCurrencyClick(){
    this.getCurrencyRates()
  }

  getCurrencyRates(){
    this.apollo.watchQuery({
      query: this.GET_RATES
    })
    .valueChanges.subscribe(result => {
      console.log(result.data)
    })
  }

}
