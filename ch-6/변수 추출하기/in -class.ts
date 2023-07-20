export class Order {
  private _quantity: number;
  private _itemPrice: number;

  constructor(quantity: number, itemPrice: number) {
    this._quantity = quantity;
    this._itemPrice = itemPrice;
  }

  get quantity() {
    return this._quantity;
  }
  get itemPrice() {
    return this._itemPrice;
  }
  get basePrice() {
    return this.quantity * this.itemPrice;
  }
  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(this.quantity, this.itemPrice * 0.1, 100);
  }
  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }
}
