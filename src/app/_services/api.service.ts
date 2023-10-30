import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
 providedIn: 'root',
})
export class ApiService {
    baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
    constructor(private http: HttpClient) {}

    /***
     * RICERCA
     */
    searchByF(firstLetter: string) {
        return this.http.get(this.baseUrl + 'search.php?f=' + firstLetter);
    }

    searchById(Id: number) {
        return this.http.get(this.baseUrl + 'lookup.php?i=' + Id);

    }
}