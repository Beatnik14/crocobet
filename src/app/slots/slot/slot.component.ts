import { Slot } from './../models/slot.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss'],
})
export class SlotComponent implements OnInit {
  @Input() slot: Slot;
  constructor() {}

  ngOnInit(): void {}
}
