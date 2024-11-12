import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public seating : any;
  private  httpClient = inject(HttpClient)
  ngOnInit() {
    this.seating  = this.httpClient.get<any>("http://localhost:3000/seats").subscribe(seating=> console.log(seating))

  }

  ngOnDestroy() {
    
  }

  get totalSeats(): number {
    return this.seating.length;
  }

  // get availableSeats(): number {
  //   return this.seating.filter(seat => seat.available).length;
  // }
}
