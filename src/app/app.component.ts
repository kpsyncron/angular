import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  titleColor() : string {
    return (this.title.length % 2 === 0) ?
      'gray' : 'blue';
  }
}
