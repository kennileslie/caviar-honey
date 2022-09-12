import { AuthService } from 'src/app/core/authentication/auth.service';

import { ItemsService } from '../../../core/services/items.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/models/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  items: Item[] = [];

  constructor(
    private itemService: ItemsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.itemService.getAllItems().subscribe((res) => {
      if (res.status === 'success') {
        this.items = res.data!['items'];
      }
    });
  }

  deleteOneItem(item: Item) {
    if (window.confirm('Delete')) {
      this.itemService.deleteItem(item).subscribe((res) => {
        if (res === null) {
          this.getAllItems();
        }
      });
    }
  }
  logout() {
    this.authService.logout();
  }
}
