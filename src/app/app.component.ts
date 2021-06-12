import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  res = {
    "values": { "key1": "Value1", "key2": "value2" }
  };
  private map = new Map<string, string>();
  constructor() {
    Object.keys(this.res['values']).forEach(key => this.map.set(key, this.res['values'][key]))
    console.log(this.map)
  }
}
