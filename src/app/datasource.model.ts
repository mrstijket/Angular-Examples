import { Product } from "./product.model";

export class SimpleDataSource {
  private products: Product[];

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Samsung S20 FE", "Price/Performance phone", "s20fe.jpg", 700),
      new Product(2, "Iphone 11 Pro", "Highly Popular phone", "iphone11pro.jpg", 1000),
      new Product(3, "Xiaomi Redmi 12", "Every aspect is middle phone", "xiaomiredmi12.jpg", 650),
      new Product(4, "Iphone 13 Pro Max", "Incredably overprice phone", "iphone13promax.jpg", 2000),
      new Product(5, "Poco F1", "Budget phone", "pocof1.jpg", 200),
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}