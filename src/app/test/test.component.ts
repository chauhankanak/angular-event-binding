import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <button (click)="onsubmit($event)">Click Me</button>
    {{name}}
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name:String;
  onsubmit(event){
    console.log(event.type);
    this.name = 'Abhijeet';
  }

  constructor() { }

  ngOnInit() {
  }

}
