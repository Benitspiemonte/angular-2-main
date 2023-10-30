import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DrinkService } from "../_services/drink.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  constructor(
    private drinkService: DrinkService,
    private route: ActivatedRoute
  ) {}

  filter : string = "";
  letters: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  drinks: Array<any> = [];
  id: string = "";
  seachByLetter: string = "a";

  ngOnInit(): void {
    console.log(this.letters);
    
    this.id = this.route.snapshot.paramMap.get("id") as string;
    if (this.id != null) this.seachByLetter = this.id;

    this.drinkService
      .getElencoDrinks(this.seachByLetter)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
      });
  }
}
