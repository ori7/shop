import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.product = <Product>{};
  }

  addProduct(){
    console.log(this.product);
    this.ProductService.add(this.product).subscribe(res => {
      console.log(res);
    });
  }
}
