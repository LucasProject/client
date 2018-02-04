import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {
  
  public myValue: Number = 7;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('Value is set to: ' + this.myValue);
  }

}
