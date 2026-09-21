/*
Scenario: You are given a hardcoded array of user transaction records in JSON format.
Task: Write a function (in the programming language of your choice) that iterates through
this data and returns the total revenue of all completed transactions.
*/

const transactions = [
  { id: 1, amount: 50.0, status: "completed" },
  { id: 2, amount: 120.5, status: "refunded" },
  { id: 3, amount: 75.25, status: "completed" },
  { id: 4, amount: 15.0, status: "pending" },
];

const totalCompletedRevenue = (trans) => {
  let totalRevenue = 0;

  for (const record of trans) {
    if (record.status === "completed") totalRevenue += record.amount;
  }
  return totalRevenue;
};

console.log(totalCompletedRevenue(transactions));
