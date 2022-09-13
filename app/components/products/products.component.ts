import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  datas:Products[]=[];
  public maMH1='';
  constructor(private prod:ProductService) { }

  ngOnInit(): void {
    this.getAll();

  }
  getAll(){
    this.prod.getAllProduct().subscribe((data:any)=>{
      this.datas = data;
    });
  }

}
