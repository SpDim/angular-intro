import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Spyros';
  lastName = 'Dim';

  person: Person = {
    givenName: 'Spyros',
    surName: 'Dim',
    age: 0x37,
    email: 'spdim@example.gr',
    address: 'Athens, Greece',
  };

  person2: Person = {
    givenName: 'test',
    surName: 'user',
    age: 0x37,
    email: 'test@aueb.gr',
    address: 'Thess, Greece',
  };
}
