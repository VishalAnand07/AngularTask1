import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data arrived after 2 seconds")
    }, 2000)
  })

  contactNumber = 987654321;

  filteredStatus : string = '';

  todoCollection = [
    { label : "to buy the jeans", status : "completed"},
    { label : "to buy the pulse", status : "pending"},
    { label : "to renew bike insurance", status : "completed"},
    { label : "to pot the plant", status : "pending"},
  ]

  onAddItem(){
    this.todoCollection.push({label : "New Item", status : "pending"})
  }
  constructor() { }

  ngOnInit(): void {
  }

}
