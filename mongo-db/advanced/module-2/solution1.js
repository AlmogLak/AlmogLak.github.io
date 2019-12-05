db.bank_data.update({}, {$set: {address: "TLV"}}, {multi: true});

db.bank_data.find({first_name: "JAMES", last_name: "WHITE"}).pretty();

db.bank_data.update({first_name: "JAMES", last_name: "WHITE"},{$unset: {adrs: ""}, $currentDate: {last_action: {$type: "timestamp" }}});

db.bank_data.update({first_name: "JAMES", last_name: "WHITE"},{$push: {accounts: new_account}});

db.bank_data.update({first_name: "JAMES", last_name: "WHITE"},{$addToSet: {accounts: new_account}});

db.bank_data.update({first_name: "JAMES", last_name: "WHITE"},{$pop: {accounts: -1}});

db.bank_data.findAndModify({query: {first_name: "JAMES", last_name: "WHITE"}, update: {$set: {first_name: "ALMOG"}}, new: true});
