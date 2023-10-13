import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Spyros';
  lastName = 'Dim';

  person = {
    givenName: "Spyros",
    surnName: "Dim",
    age: 0x23,
    email: "demo@gmail.com",    
  }
}
