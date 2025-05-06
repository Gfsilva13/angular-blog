import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{
  @Input()
  photoSmall: String = ""
  @Input()
  titleSmall: String = ""
  constructor() { }

  ngOnInit(): void {

  }

}
