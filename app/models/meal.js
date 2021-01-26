class Meal {
  constructor(
    id,
    categoryIds,
    typeId,
    title,
    price,
    details,
    type,
    imageUrl,
    ingredients,
    isRaw,
    isCooked,
    isVegetarian
  ) {
    (this.id = id),
      (this.categoryIds = categoryIds),
      (this.typeId = typeId),
      (this.title = title),
      (this.price = price),
      (this.details = details),
      (this.type = type),
      (this.imageUrl = imageUrl),
      (this.ingredients = ingredients),
      (this.isRaw = isRaw),
      (this.isCooked = isCooked),
      (this.isVegetarian = isVegetarian);
  }
}

export default Meal;
