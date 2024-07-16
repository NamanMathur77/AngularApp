import { Component, OnInit } from '@angular/core';
import { ShopDataService } from './shop-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private myService: ShopDataService, private router: Router) { }

  ngOnInit(): void {
    this.myService.getTableData().subscribe(
      response => {
        this.data = response;
        console.log(this.data);
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  onItemClick(id:any) {  
    this.router.navigateByUrl('details');
} 
}