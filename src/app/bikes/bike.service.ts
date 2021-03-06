import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from "rxjs";
import { BIKES } from "src/app/bikes/mock-bikes-list";
import { Bike } from "./bike";
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class BikeService {
 //   private bikes$: BehaviorSubject<Bike[]> = new BehaviorSubject<Bike[]>(BIKES);
    private bikes: Bike[]=[];
//    bikesUrl = 'http://localhost:8080/JPA_EJBRestfulService/webapi/Customer/bikes';
    bikesUrl1 = 'https://libred.herokuapp.com/ServletToBase4';
    str:any; 
    constructor(private httpClient: HttpClient) {
       this.bikes=BIKES;
    }
//    getBikes(): Observable<Bike[]> { return this.httpClient.get<Bike[]>(this.bikesUrl);    }
    
    getBikes(): Observable<Bike[]> {this.httpClient.get(this.bikesUrl1, {responseType: 'text'}).
                                     subscribe(str=>{this.str=str;
                                      console.log(str);}); 
                                         return of (BIKES); }

    //   getBikes() { return this.bikes$ }
    getStr(): Observable<any>{return this.httpClient.get(this.bikesUrl1, {responseType: 'text'})
                             //    .subscribe(str=>{this.str=str;
                            //     console.log(str);}); 
                            //     return of (this.str); 
        
                               }
    
    getBike(id: number | string): Observable<Bike> {
        return this.getBikes().pipe(
          map((bikes: Bike[]) => bikes.find(bike => bike.id === +id))
        );
   //     return this.bikes.find( p => p.id === id);
      }
    
}   
