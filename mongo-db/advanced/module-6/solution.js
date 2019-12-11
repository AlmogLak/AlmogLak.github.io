//define the map function:
var attMapFunction = function(){
	var convertMoney =  function(currency, balance) {
		var result = 0;
		switch(currency) {
				case "ILS":
				result = (balance * 0.2796);
				break;
				case "YEN":
				result = (balance * 0.0092);
				break;
				case "POUNDS STERLING":
				result = (balance * 1.2927);
				break;
				case "PESO":
				result = (balance * 0.0578);
				break;
				case "EURO":
				result = (balance * 1.2018);
				break;
				case "YUAN":
				result = (balance * 0.15);
				break;
				default:
				result = balance;
				break;
			}
			return result;
	}
	var result = 0;

	for(var account of this.accounts) {
		emit(account["account_type"], convertMoney(account.currency, account["account_balance"]));
	}
}

//define the reduce function:
var attReduceFunction = function(keyAccountType, valueBalances) {
	return Array.sum(valueBalances);
}

//run the mapReduce command:
db.bank_data.mapReduce(attMapFunction, attReduceFunction, {out: "att_map_reduce"})
