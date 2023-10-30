import { Component, OnInit } from "@angular/core";
import { DrinkService } from "../_services/drink.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-detail-component",
  templateUrl: "./detail-component.component.html",
  styleUrls: ["./detail-component.component.css"],
})
export class DetailComponentComponent implements OnInit {
  drink: any;
  parmId: number = 15200;
  id: number = 0;

  constructor(
    private drinkService: DrinkService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.parmId = parseInt(this.route.snapshot.paramMap.get("id") as string);
    if (this.parmId != null) this.id = this.parmId;
    console.log(this.id);

    this.drinkService.getDrinksById(this.id).subscribe((response: any) => {
      console.log(response);

      this.drink = response.drinks[0];
      console.log(this.drink);
    });
  }
}
