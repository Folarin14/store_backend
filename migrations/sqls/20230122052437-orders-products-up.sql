CREATE TABLE Orders_Products (order_id INTEGER, product_id INTEGER, FOREIGN KEY (order_id) REFERENCES Orders(id), FOREIGN KEY (product_id) REFERENCES Products(id), PRIMARY KEY(order_id, product_id))