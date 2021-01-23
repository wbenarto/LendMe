import { createNavigatorFactory } from "@react-navigation/native";

class Category {
  constructor(id, title, type, price) {
    (this.id = id),
      (this.title = title),
      (this.type = type),
      (this.price = price);
  }
}

export default Category;
