import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor(
    private router: Router,
    private viewPortScroller: ViewportScroller
  ) {}

  ngOnInit(): void {}
  public onClick(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);
  }
}
