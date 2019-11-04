db.bank_data.findOne(); // 1

db.bank_data.insert({first_name: "ALMOG", last_name: "LAKTIVI", accounts: [{
    account_type: "Checking", account_balance: 155000, currency: "ILS"}
]}); // 2

db.bank_data.insertMany([
    {first_name: "ALMOG", last_name: "LAKTIVI", accounts: [{
    account_type: "Checking", account_balance: 155000, currency: "ILS"}
    ]},
    {first_name: "AVI", last_name: "GEFEN", accounts: [{
    account_type: "Checking", account_balance: 15500000, currency: "USD"}
    ]}
]); // 3

db.bank_data.find({first_name: "MICHAEL"}).size(); // 4
db.bank_data.find({first_name: "MICHAEL"}).limit(5).pretty(); // 4

db.bank_data.update({first_name: "MICHAEL"}, {$set: {client_level: "VIP"}}, {multi: true}); // 5

db.bank_data.updateOne({first_name: "ALMOG"}, {$set: {client_level: "VIP"}}); // 6

db.bank_data.deleteMany({first_name: {$in: ["ALMOG", "AVI"]}}); // 7
