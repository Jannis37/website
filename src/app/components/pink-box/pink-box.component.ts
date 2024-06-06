import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pink-box',
  templateUrl: './pink-box.component.html',
  styleUrls: ['./pink-box.component.css']
})
export class PinkBoxComponent implements OnInit {

  @Input() arg!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
