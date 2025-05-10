import { Component, Input, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{
  @Input()
  photoCover: String = ""
  @Input()
  cardTitle: String = ""
  @Input()
  cardDescription: String = ""
  @Input()
  Id:String ="0"

  constructor() { }

  ngOnInit(): void {

  }
}
