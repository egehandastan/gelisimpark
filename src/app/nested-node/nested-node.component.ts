import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
interface CategoryNodes{
  name: string;
  children?: CategoryNodes[];
}
const CATEGORY_DATA: CategoryNodes[] = [
  {
    name: 'Kadın',
    children: [
      {
        name: 'Çanta',
        children: [{name: 'Sırt Çantası'}, {name: 'El Çantası'}],
      },
      {
        name: 'Ayakkabı',
        children: [{name: 'Spor'}, {name: 'Günlük'}],
      },
      {
        name: 'Giyim',
        children:[{name: 'İç Giyim'},{name:'Dış Giyim'}],
      },
      {
        name: 'Aksesuar',
        children:[{name: 'Şapka'},{name:'Bileklik'}],
      }
    ],
    
  },
  {
    name: 'Erkek',
    children: [
      {
        name: 'Çanta',
        children: [{name: 'Sırt Çantası'}, {name: 'El Çantası'}],
      },
      {
        name: 'Ayakkabı',
        children: [{name: 'Spor'}, {name: 'Günlük'}],
      },
      {
        name: 'Giyim',
        children:[{name: 'İç Giyim'},{name:'Dış Giyim'}],
      },
      {
        name: 'Aksesuar',
        children:[{name: 'Şapka'},{name:'Bileklik'}],
      }
    ],
  },
  {name: 'Sana Özel'},
  {name: 'Favoriler'}
]



@Component({
  selector: 'app-nested-node',
  templateUrl: './nested-node.component.html',
  styleUrls: ['./nested-node.component.css']
})
export class NestedNodeComponent implements OnInit {
  treeControl = new NestedTreeControl<CategoryNodes>(node => node.children);
  dataSource = new MatTreeNestedDataSource<CategoryNodes>();

  constructor() { 
    this.dataSource.data = CATEGORY_DATA;
  }

  ngOnInit(): void {
  }
  hasChild = (_: number, node: CategoryNodes) => !!node.children && node.children.length > 0;
}
