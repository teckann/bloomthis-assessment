/*
Scenario: A relational database contains two tables: 
  - Users (columns: id, name, email) 
  - Orders (columns: id, user_id, order_total, created_at)
Task: Write a SQL query that retrieves the names and emails of all users who have 
placed at least one order with an order_total strictly greater than $100.
*/

SELECT U.name, U.email
FROM Users U
JOIN Orders O ON U.id = O.user_id
WHERE O.order_total > 100;