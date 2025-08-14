class Customer {
    private static idCounter = 1;
    id: number;
    name: string;
    email: string;
    shippingAddress: string;

    constructor(name: string, email: string, shippingAddress: string) {
        this.id = Customer.idCounter++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }

    getDetails(): string {
        return `Customer ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Address: ${this.shippingAddress}`;
    }
}

abstract class Product {
    private static idCounter = 1;
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(name: string, price: number, stock: number) {
        this.id = Product.idCounter++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    sell(quantity: number): number {
        if (this.stock >= quantity) {
            this.stock -= quantity;
            return this.price * quantity;
        }
        return 0;
    }

    restock(quantity: number): void {
        this.stock += quantity;
    }

    abstract getProductInfo(): string;
    abstract getShippingCost(distance: number): number;
    abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
    warrantyPeriod: number;

    constructor(name: string, price: number, stock: number, warrantyPeriod: number) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }

    getProductInfo(): string {
        return `${this.name} - ${this.price} VND, Stock: ${this.stock}, Warranty: ${this.warrantyPeriod} months`;
    }

    getShippingCost(distance: number): number {
        return 50000;
    }

    getCategory(): string {
        return "Electronics";
    }
}

class ClothingProduct extends Product {
    size: string;
    color: string;

    constructor(name: string, price: number, stock: number, size: string, color: string) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }

    getProductInfo(): string {
        return `${this.name} - ${this.price} VND, Stock: ${this.stock}, Size: ${this.size}, Color: ${this.color}`;
    }

    getShippingCost(distance: number): number {
        return 25000;
    }

    getCategory(): string {
        return "Clothing";
    }
}

class Order {
    private static idCounter = 1;
    orderId: number;
    customer: Customer;
    products: { product: Product; quantity: number }[];
    totalAmount: number;

    constructor(customer: Customer, products: { product: Product; quantity: number }[]) {
        this.orderId = Order.idCounter++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = this.calculateTotal();
    }

    private calculateTotal(): number {
        return this.products.reduce((sum, p) => sum + p.product.price * p.quantity, 0);
    }

    getDetails(): string {
        const productList = this.products
            .map(p => `${p.product.name} x${p.quantity}`)
            .join(", ");
        return `Order ID: ${this.orderId}, Customer: ${this.customer.name}, Products: [${productList}], Total: ${this.totalAmount} VND`;
    }
}

class Store {
    products: Product[] = [];
    customers: Customer[] = [];
    orders: Order[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    addCustomer(name: string, email: string, address: string): Customer {
        const customer = new Customer(name, email, address);
        this.customers.push(customer);
        return customer;
    }

    createOrder(customerId: number, productQuantities: { productId: number; quantity: number }[]): Order | null {
        const customer = this.findEntityById(this.customers, customerId);
        if (!customer) {
            console.log("Customer not found");
            return null;
        }

        const orderProducts: { product: Product; quantity: number }[] = [];

        for (const pq of productQuantities) {
            const product = this.findEntityById(this.products, pq.productId);
            if (!product) {
                console.log(`Product with ID ${pq.productId} not found`);
                return null;
            }
            if (product.stock < pq.quantity) {
                console.log(`Not enough stock for ${product.name}`);
                return null;
            }
            product.sell(pq.quantity);
            orderProducts.push({ product, quantity: pq.quantity });
        }

        const order = new Order(customer, orderProducts);
        this.orders.push(order);
        return order;
    }

    cancelOrder(orderId: number): void {
        const index = this.orders.findIndex(o => o.orderId === orderId);
        if (index === -1) {
            console.log("Order not found");
            return;
        }
        this.orders[index].products.forEach(p => p.product.restock(p.quantity));
        this.orders.splice(index, 1);
        console.log(`Order ${orderId} cancelled.`);
    }

    listAvailableProducts(): void {
        const available = this.products.filter(p => p.stock > 0);
        available.forEach(p => console.log(p.getProductInfo()));
    }

    listCustomerOrders(customerId: number): void {
        const orders = this.orders.filter(o => o.customer.id === customerId);
        orders.forEach(o => console.log(o.getDetails()));
    }

    calculateTotalRevenue(): number {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }

    countProductsByCategory(): void {
        const categoryCount = this.products.reduce((acc, p) => {
            acc[p.getCategory()] = (acc[p.getCategory()] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
        console.log(categoryCount);
    }

    updateProductStock(productId: number, newStock: number): void {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
            console.log(`Updated stock for ${this.products[index].name} to ${newStock}`);
        } else {
            console.log("Product not found");
        }
    }
    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
        return collection.find(item => item.id === id);
    }
}

let choice: number;
const store = new Store();

do {
    choice = Number(prompt(`
        1. Thêm khách hàng mới. 
        2. Thêm sản phẩm mới (Đồ điện tử / Quần áo). 
        3. Tạo đơn hàng mới. 
        4. Hủy đơn hàng. 
        5. Hiển thị sản phẩm còn hàng. 
        6. Hiển thị đơn hàng của khách hàng. 
        7. Tính tổng doanh thu. 
        8. Thống kê sản phẩm theo danh mục. 
        9. Cập nhật tồn kho. 
        10. Tìm kiếm thông tin bằng ID. 
        11. Xem thông tin chi tiết sản phẩm. 
        12. Thoát.
    `));

    switch (choice) {
        case 1: {
            const name = prompt("Nhập tên khách hàng:");
            const email = prompt("Nhập email:");
            const address = prompt("Nhập địa chỉ giao hàng:");
            store.addCustomer(name!, email!, address!);
            break;
        }
        case 2: {
            const type = prompt("Nhập loại sản phẩm (electronics / clothing):");
            const name = prompt("Tên sản phẩm:");
            const price = Number(prompt("Giá:"));
            const stock = Number(prompt("Tồn kho:"));
            if (type === "electronics") {
                const warranty = Number(prompt("Thời gian bảo hành (tháng):"));
                store.addProduct(new ElectronicsProduct(name!, price, stock, warranty));
            } else if (type === "clothing") {
                const size = prompt("Kích cỡ:");
                const color = prompt("Màu sắc:");
                store.addProduct(new ClothingProduct(name!, price, stock, size!, color!));
            }
            break;
        }
        case 3: {
            const customerId = Number(prompt("Nhập ID khách hàng:"));
            const productQuantities: { productId: number, quantity: number }[] = [];
            let more;
            do {
                const pid = Number(prompt("Nhập ID sản phẩm:"));
                const qty = Number(prompt("Số lượng:"));
                productQuantities.push({ productId: pid, quantity: qty });
                more = prompt("Thêm sản phẩm nữa? (y/n)");
            } while (more === "y");
            store.createOrder(customerId, productQuantities);
            break;
        }
        case 4: {
            const oid = Number(prompt("Nhập ID đơn hàng cần hủy:"));
            store.cancelOrder(oid);
            break;
        }
        case 5:
            store.listAvailableProducts();
            break;
        case 6: {
            const cid = Number(prompt("Nhập ID khách hàng:"));
            store.listCustomerOrders(cid);
            break;
        }
        case 7:
            console.log("Tổng doanh thu:", store.calculateTotalRevenue());
            break;
        case 8:
            store.countProductsByCategory();
            break;
        case 9: {
            const pid = Number(prompt("Nhập ID sản phẩm:"));
            const stock = Number(prompt("Nhập số lượng tồn kho mới:"));
            store.updateProductStock(pid, stock);
            break;
        }
        case 10: {
            const type = prompt("Tìm (customer/product)?");
            const id = Number(prompt("Nhập ID:"));
            if (type === "customer") {
                const customer = store.findEntityById(store.customers, id);
                console.log(customer ? customer.getDetails() : "Không tìm thấy khách hàng");
            } else {
                const product = store.findEntityById(store.products, id);
                console.log(product ? product.getProductInfo() : "Không tìm thấy sản phẩm");
            }
            break;
        }
        case 11: {
            const pid = Number(prompt("Nhập ID sản phẩm:"));
            const product = store.products.find(p => p.id === pid);
            console.log(product ? product.getProductInfo() : "Không tìm thấy sản phẩm");
            break;
        }
        case 12:
            console.log("Thoát chương trình...");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== 12);


