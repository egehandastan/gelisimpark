import { Component, OnInit } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AlertifyService } from '../services/alertify.service';
import { Cards } from './cards';

declare let alertify:any;
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  gridColumns =5;
  SortDirection = 'asc';

  constructor(private alertifyService:AlertifyService) { }
  title = "Product List"
  counter:number=0;
  filterText=""
  products: Cards[] = [
    { id: 1, name: "Moschino", price: 26999, categoryId: 1, description: "Kapitone desenli çanta", image: "assets/images/çanta.png" },
    { id: 2, name: "Giuseppe Zanotti", price: 18499, categoryId: 2, description: "Deri ayakkabı",image: "assets/images/ayakkabı.png" },
    { id: 3, name: "Prada", price: 9999, categoryId: 3, description: "Siyah marka logolu balıkçı model şapka",image: "assets/images/sapka.png" },
    { id: 4, name: "Dolce&Gabbana", price: 16499, categoryId: 4, description: "Logo baskılı sweatshirt",image: "assets/images/sweatshirt.png" },
    { id: 5, name: "Versace", price: 17199, categoryId: 2, description: "Medusa zincirli sandalet",image: "assets/images/gold_ayakkabı.png" },
    { id: 6, name: "Versace", price: 14749, categoryId: 6, description: "Kazayağı desenli yünlü mini etek", image: "assets/images/pembe_etek.png"  },
    { id: 7, name: "Balenciaga Eyewear", price: 4999, categoryId: 3, description: "Cat-eye model gözlük",image: "assets/images/gözlük.png"  },
    { id: 8, name: "Moncler", price: 17499, categoryId: 5, description: "Kısa paninaro mont",image: "assets/images/sarı_mont.png"  },
    { id: 9, name: "Paco Rabanne", price: 13799, categoryId: 1, description: "1969 parti topu omuz çantası",image: "assets/images/disco_çanta.png"  },
    { id: 10, name: "Jennifer Behr", price: 5199, categoryId: 3, description: "Ramona kristal küpe",image: "assets/images/küpe.png" },
    { id: 11, name: "Balenciaga", price: 16999, categoryId: 4, description: "Kısa kollu ipek gömlek",image: "assets/images/siyah_gömlek.png" },
    { id: 12, name: "Guiseppe Zanotti", price: 14249, categoryId: 1, description: "Timsah derisi desenli postacı çantası", image: "assets/images/erkek_çanta.png"  },
    { id: 13, name: "Versace", price: 14599, categoryId: 6, description: "Yüksek bel düz kesim pantolon", image: "assets/images/siyah_pantolon.png" },
    { id: 14, name: "Versace", price: 14749, categoryId: 4, description: "Metalik barok desenli t-shirt",image: "assets/images/erkek_tişört.png"  },
    { id: 15, name: "Rick Owens", price: 26999, categoryId: 5, description: "Suni deri eskitilmiş bomber ceket",image: "assets/images/desenli_ceket.png" },
    { id: 16, name: "Yves Saint Laurent", price: 9199, categoryId: 3, description: "Logolu bileklik",image: "assets/images/erkek_bileklik.png"  },
    ]

  ngOnInit(): void {

  }
  addToCart(product: any){
    alertify.success("Sepete eklendi")
   this.counter++;
   return this.counter;

  }
  removeFromCart(product: any){


  if(this.counter==0){
  this.counter=0;
  }
  else{
  this.counter--;
   alertify.error("Sepetten Çıkarıldı")
  }

    return this.counter;
  }

  filterDesc(){
  this.products = this.products.sort(function(a,b) {
  return b.price-a.price
  });
  }

  filterAsc(){
   this.products = this.products.sort(function(a,b) {
    return a.price-b.price
  });
  }
}
