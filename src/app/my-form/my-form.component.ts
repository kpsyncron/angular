import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  private model : Person = 
    new Person("Evil", 42);

  constructor() { }

  ngOnInit() {
  }

}

class Person {
  constructor(
    public name : string,
    public age : number
  ) {} 
}
