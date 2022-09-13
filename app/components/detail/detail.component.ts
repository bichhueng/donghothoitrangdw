import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product = new Products;


  constructor(private route:ActivatedRoute,private ProductService:ProductService) { }

  ngOnInit(): void {
    this.getRoutePro(this.route.snapshot.params['maMH']);
  }
  getRoutePro(id:any){
    this.ProductService.searchProduct(id).subscribe((data:any)=>{
      this.product = data;
    })
  }
}
