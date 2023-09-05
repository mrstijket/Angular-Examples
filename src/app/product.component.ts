import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {
  model: ProductRepository = new ProductRepository();
  disabled = true;

  getClasses(id: number): string {
    let product = this.model.getProductById(id);
    return (product.price as number <= 1000 ? "bg-info" : "bg-secondary") + " m-2 p-2 text-white ";
  }

  // Property Binding Examples
  //product: Product = this.model.getProductById(1);

  getClassMap(id: number): Object {
    let product = this.model.getProductById(id);
    return {
      "bg-success": product.price as number <= 1000,
      "bg-secondary": product.price as number > 1000,
      "text-center text-white": product.name == "Samsung S20 FE"
    }
  }

  getStyles(id: number) {
    let product = this.model.getProductById(id);
    return {
      fontWeight: "bold",
      fontStyle: "italic",
      color: product.price as number <= 1000 ? "gold" : "cornsilk"
    }
  }
}
