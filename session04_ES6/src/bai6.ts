type Products = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number; 
};

const listProduct: Products[] = [
  {
    id: "P001",
    name: "Laptop Dell",
    price: 20000000,
    category: {
      id: "C01",
      name: "Điện tử"
    },
    discount: 10
  }
];

const getFinalPrice = (product: Products): number => {
  if (product.discount) {
    return product.price * (1 - product.discount / 100);
  }
  return product.price;
};

const printProductInfo = (product: Products): void => {
  const finalPrice = getFinalPrice(product);

  console.log(`Sản phẩm: ${product.name}`);
  console.log(`Mã sản phẩm: ${product.id}`);
  console.log(`Danh mục: ${product.category.name}`);
  console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);

  if (product.discount) {
    console.log(`Giảm giá: ${product.discount}%`);
    console.log(`Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
  } else {
    console.log(`Không có giảm giá`);
  }

};

listProduct.forEach(printProductInfo);
