# Dato un db di un sito ecommerce esegui le seguenti query

1) Selezionare tutti gli uffici, ordinati per nazione:
  ```MYSQL
  SELECT * 
  FROM `offices` 
  ORDER BY `country` ASC; 
  ```
2) Selezionare tutti gli uffici, ordinati per nazione e per città:
  ```MYSQL
  SELECT * 
  FROM `offices`  
  ORDER BY `country` ASC, `city` ASC;
  ```
3) Selezionare tutti gli impiegati, ordinati per titolo e per nome:
  ```MYSQL
  SELECT * 
  FROM `employees`
  ORDER BY `title` ASC, `name` ASC;
  ```
4) Contare quanti impiegati condividono lo stesso ufficio:
  ```MYSQL
  SELECT COUNT(*) AS 'employees_per_office', `offices`.*
  FROM `employees` 
  INNER JOIN `offices` ON `offices`.`id` = `employees`.`office_id`
  GROUP BY `office_id`;
  ```
5) Contare quanti impiegati condividono la stessa estensione:
  ```MYSQL
  SELECT COUNT(*) AS 'employees_number', `extension`
  FROM `employees`
  GROUP BY `extension`;
  ```
6) Selezionare tutti i prodotti con quantità inferiore a 500 pezzi:
  ```MYSQL
  SELECT * 
  FROM `products`
  WHERE `qty` < 500
  ORDER BY `qty`;
  ```
7) Selezionare tutti i prodotti Ford:
  ```MYSQL
  SELECT * 
  FROM `products`
  WHERE `name` LIKE '%ford%';
  ```
8) Contare quanti prodotti Ford hanno quantità inferiore a 500 pezzi:
  ```MYSQL
  SELECT * 
  FROM `products`
  WHERE `name` LIKE '%ford%' AND `qty` < 500;
  ```
9) Per ogni impiegato mostrare il suo diretto superiore (tip: usa un alias quando fai la join):
  ```MYSQL
  ```
10) Per ogni impiegato mostrare il numero di telefono completo (numero ufficio + estensione):
  ```MYSQL
  SELECT `employees`.`name`, `employees`.`lastname`, CONCAT(`offices`.`phone`, ' ', `employees`.`extension`) AS 'full_phone_number'
  FROM `employees` 
  INNER JOIN `offices` ON `offices`.`id` = `employees`.`office_id`;
  ```
11) Selezionare i 10 ordini più recenti:
  ```MYSQL
  SELECT * 
  FROM `orders`
  ORDER BY `date` DESC
  LIMIT 10;
  ```
12) Per ogni cliente mostrare il numero di ordini che ha fatto (tip: attenzione al tipo di JOIN e al campo usato per il COUNT):
  ```MYSQL
  SELECT COUNT(*) AS 'Orders number', `customers`.*
  FROM `orders`
  INNER JOIN `customers` ON `customers`.`id` = `orders`.`customer_id`
  GROUP BY `customer_id`
  ORDER BY `customers`.`id` ASC;
  ```
13) Per ogni cliente mostrare la quantità di prodotti acquistati in ogni ordine, mostrando anche il nome del prodotto (tip: attenzione al tipo di JOIN):
  
    - Ordinare per quantità
    ```MYSQL
    SELECT  `customers`.`id`, `customers`.`name`, `customers`.`lastname`, `customers`.`phone`, `customers`.`address_line_1`, `orderdetails`.`quantity`, `products`.`name`
    FROM `customers`
    INNER JOIN `orders` ON `customers`.`id` = `orders`.`customer_id`
    INNER JOIN `orderdetails` ON `orders`.`id` = `orderdetails`.`order_id`
    INNER JOIN `products` ON `orderdetails`.`product_id` = `products`.`id`
    ORDER BY `orderdetails`.`quantity`;
    ```
    - Ordinare per nome o ID cliente
    ```MYSQL
    SELECT  `customers`.`id`, `customers`.`name`, `customers`.`lastname`, `customers`.`phone`, `customers`.`address_line_1`, `orderdetails`.`quantity`, `products`.`name`
    FROM `customers`
    INNER JOIN `orders` ON `customers`.`id` = `orders`.`customer_id`
    INNER JOIN `orderdetails` ON `orders`.`id` = `orderdetails`.`order_id`
    INNER JOIN `products` ON `orderdetails`.`product_id` = `products`.`id`
    ORDER BY `customers`.`id`;
    ```
14) Per ogni cliente mostrare il totale speso sulla piattaforma, il costo sostenuto per ogni prodotto ed il guadagno netto per la piattaforma (tip: la colonna MSRP indica il prezzo a cui è stato venduto il singolo prodotto):
  - Totale speso per cliente
  - Costo per ogni prodotto
  - Guadagno netto per la piattaforma
  ```MYSQL
  SELECT  `customers`.`name`, SUM(`orderdetails`.`quantity` * `products`.`MSRP`) AS 'tot'
  FROM `customers`
  INNER JOIN `orders` ON `customers`.`id` = `orders`.`customer_id`
  INNER JOIN `orderdetails` ON `orders`.`id` = `orderdetails`.`order_id`
  INNER JOIN `products` ON `orderdetails`.`product_id` = `products`.`id`
  GROUP BY `customers`.`name`
  ORDER BY `customers`.`name` ASC;
  ```