use att_bank;
db.runCommand( {
    collMod: "bank_data",
    validator: { $jsonSchema: {
       bsonType: "object",
       required: [ "first_name", "last_name", "accounts" ],
       properties: {
        first_name: {
             bsonType: "string",
             description: "First name of the client"
          },
          last_name: {
             bsonType: "string",
             description: "Last name of the client"
          },
          address: {
            bsonType: "string",
            description: "Address of the client"
          },
          accounts: {
              bsonType: "array",
              description: "List of all client accounts",
              minItems: 1,
              items: {
                bsonType: "object",
                required: ["account_type", "account_balance", "currency"],
                properties: {
                    account_type: {
                        bsonType: "string",
                        description: "The type of the specific account"
                    },
                    account_balance: {
                        bsonType: "double",
                        description: "The balance of the specific account"
                    },
                    currency: {
                        enum: ["USD", "YEN", "EURO", "PESO", "YUAN", "POUNDS STERLING"],
                        description: "currency coins"
                    }
                }
              }
          }
       }
    } },
    validationLevel: "strict"
 } );
 