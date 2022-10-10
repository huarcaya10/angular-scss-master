import { Component, OnInit} from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss']
})
export class DistributionComponent implements OnInit {
 
 // constructor() {}
  constructor(){}
  ngOnInit(): void {
  }
 
  p_producto: string = "";
  p_imagen: string = "";
  p_estado: string ="";

  products: Product[] = [{
    name: "parquet",
    price: 2,
    image: "https://media.istockphoto.com/photos/sample-of-wood-chipboard-wooden-laminate-veneer-material-for-interior-picture-id1135678299?b=1&k=20&m=1135678299&s=612x612&w=0&h=JVmRpRls_0Pq9f5GT2EPtmWXbzlLMXGlKX6L4YOuKU8=",
    estado: "Entregado",
    description: "",
    porcentaje: "",
  }];
  
  addProduct(): void{
    const newProduct ={
      name: this.p_producto,
      price: 0,
      image: this.p_imagen,
      estado: this.p_estado,
      description: "",
      porcentaje: "",
    }
    this.products.push(newProduct);
    this.p_producto = "";
    this.p_imagen = "";
    this.p_estado="";
  }
  deleteProduct(position: number): void{
    this.products.splice(position,1);
  }
  
}
