db.bank_data.find({first_name: {$ne: "JAMES"}}).count();

db.bank_data.find({age: {$gte: 25}}).pretty();

db.bank_data.find({age: {$exists: true}}).count();

db.bank_data.find({first_name: "JAMES"}).count();

db.bank_data.aggregate([{$match: {first_name: {$nin: ["DAVID", "Almog"]}}}, {$count: "totalAccounts"}]).pretty();

db.bank_data.aggregate([{$match: {first_name: {$nin: ["DAVID", "Almog"]}}}, {$unwind: "$accounts"}, {$group: {_id: null, maxAccuntBalance: {$max: "$accounts.account_balance"}, totalUserAccounts: {$sum: 1}}}]).pretty();

db.bank_data.aggregate([{$match: {first_name: {$nin: ["DAVID", "Almog"]}}}, {$project: {first_name: 1, _id: 0}}, {$sort: {first_name: 1}}]).pretty();

db.bank_data.aggregate([{$match: {first_name: {$nin: ["DAVID", "Almog"]}}}, {$project: {first_name: 1, _id: 0}}, {$group: {_id: null, uniqueValues: {$addToSet: "$first_name"}}}, {$sort: {first_name: 1}}]).pretty();

