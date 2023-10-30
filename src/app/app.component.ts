import { Component, OnInit } from '@angular/core';
import { ApiService } from './_services/api.service';
import { DrinkService } from './_services/drink.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  drinks: any = []
  constructor(private apiService: ApiService,
              private drinkService: DrinkService,
              ) {}

  ngOnInit(): void {
    this.drinkService
            .getElencoDrinks('b')
            .subscribe( (response: any) => {
              this.drinks = response.drinks;
            })
  }


}
