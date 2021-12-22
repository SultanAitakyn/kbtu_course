import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'date', 'status'];
  currentDate = new Date();
  mockedDataSource = [
    {
      name: 'Sultan',
      price: '299',
      date: this.currentDate.toLocaleDateString() + ' ' + this.currentDate.toLocaleTimeString(),
      status: 'success'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
