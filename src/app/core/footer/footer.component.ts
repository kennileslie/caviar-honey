import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private viewPortScroller: ViewportScroller) {}

  ngOnInit(): void {}
  public onClick(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);
  }
}
