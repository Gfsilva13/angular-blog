import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{
  @Input()
  photoSmall: String = ""
  @Input()
  titleSmall: String = ""
  @Input()
  Id:String ="0"
  constructor() { }

  ngOnInit(): void {

  }

}
