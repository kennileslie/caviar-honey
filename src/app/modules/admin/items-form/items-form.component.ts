import { ItemsService } from 'src/app/core/services/items.service';
import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from '@angular/router';

@Component({
  selector: 'app-items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./items-form.component.scss'],
})
export class ItemsFormComponent implements OnInit {
  data = {
    _id: undefined,
    name: '',
    description: '',
    quantity: NaN,
  };
  action: 'add' | 'edit' = 'add';

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    if (id) {
      this.itemsService.getItemById(id).subscribe((res) => {
        if (res.status === 'success') {
          this.data._id = id;
          this.data.name = res.data!['item'].name!;
          this.data.description = res.data!['item'].description!;
          this.data.quantity = res.data!['item'].quantity!;

          this.action = 'edit';
        }
      });
    }
  }
  onSubmit(): void {
    if (this.action === 'add') {
      this.itemsService.createItem(this.data).subscribe((res) => {
        if (res.status === 'success') {
          this.router.navigate(['/items']);
        }
      });
    } else if (this.action === 'edit') {
      this.itemsService.updateItem(this.data).subscribe((res)=>{
        if(res.status ==='success'){
          this.router.navigate(['/items'])
        }
      });
    }
  }
}
