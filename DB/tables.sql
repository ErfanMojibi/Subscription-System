CREATE TABLE if not exists CUSTOMER(
    id serial PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    credit INT NOT NULL
);

CREATE TABLE if not exists SUBSCRIPTION(
    name VARCHAR (50) PRIMARY KEY,
    price INT NOT NULL
);

CREATE TABLE if not exists CUSTOMER_SUBSCRIPTION(
    id serial PRIMARY KEY,
    customer_id INT NOT NULL,
    subscription_name VARCHAR (50) NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    is_active BOOLEAN NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customer (id),
    FOREIGN KEY (subscription_name) REFERENCES Subscription (name)
);

CREATE TABLE if not exists INVOICE(
    id serial PRIMARY KEY,
    customer_id INT NOT NULL,
    subscription_name VARCHAR (50) NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    amount INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customer (id),
    FOREIGN KEY (subscription_name) REFERENCES Subscription (name)
);