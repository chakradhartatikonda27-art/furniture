import { CartItem, Product, ProductColor } from '../types';

export class CartService {
  static FREE_SHIPPING_THRESHOLD = 500;

  static calculateSubtotal(items: CartItem[]): number {
    return items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  static calculateRemainingForFreeShipping(subtotal: number): number {
    const remaining = CartService.FREE_SHIPPING_THRESHOLD - subtotal;
    return remaining > 0 ? remaining : 0;
  }

  static addItem(
    currentItems: CartItem[],
    product: Product,
    selectedColor: ProductColor,
    quantity: number = 1
  ): CartItem[] {
    const existingIndex = currentItems.findIndex(
      (item) => item.product.id === product.id && item.selectedColor.name === selectedColor.name
    );

    if (existingIndex > -1) {
      const updated = [...currentItems];
      updated[existingIndex].quantity += quantity;
      return updated;
    }

    const newItem: CartItem = {
      id: `${product.id}-${selectedColor.name}-${Date.now()}`,
      product,
      selectedColor,
      quantity,
    };

    return [...currentItems, newItem];
  }

  static removeItem(currentItems: CartItem[], id: string): CartItem[] {
    return currentItems.filter((item) => item.id !== id);
  }

  static updateQuantity(currentItems: CartItem[], id: string, quantity: number): CartItem[] {
    if (quantity <= 0) {
      return CartService.removeItem(currentItems, id);
    }

    return currentItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
  }
}
