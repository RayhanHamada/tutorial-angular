import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular-crash-todolist';
  name: string = 'Noc';

  constructor() {
    console.log(`123`);
    this.title = 'hohoho';
  }

  changeName(name: string) {
    this.name = name;
  }
}
