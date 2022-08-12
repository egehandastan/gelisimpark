import { Component, OnInit } from '@angular/core';
import { ProductFilterPipe } from './product-filter.pipe';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  filterText:any;

  constructor() { }

  ngOnInit(): void {
  }

}
