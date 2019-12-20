
var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon.stellar.org');

// Keys for accounts to issue  and receive 
var issuingKeys = StellarSdk.Keypair
  .fromSecret('SCZANGBA5YHTNYVVV4C3U252E2B6P6F5T3U6MM63WBSBZATAQI3EBTQ4');
var receivingKeys = StellarSdk.Keypair
  .fromSecret('SDSAVCRE5JRAI7UFAVLE5IMIZRD6N6WOJUWKY4GFN34LOBEEUS4W2T2D');

// Create an object to represent the new asset (utility  token)
var token = new StellarSdk.Asset('UtilityToken', issuingKeys.publicKey());

// First, the receiving account must trust the asset
server.loadAccount(receivingKeys.publicKey())
  .then(function(receiver) {
    var transaction = new StellarSdk.TransactionBuilder(receiver, {
      fee: 100,
      networkPassphrase: StellarSdk.Networks.PUBLIC
    })
      // The `changeTrust` operation creates (or alters) a trustline
      // The `limit` parameter below is optional, limits the token amount
      .addOperation(StellarSdk.Operation.changeTrust({
        asset: token,
        limit: '100000000'
      }))
      // setTimeout is required for a transaction
      .setTimeout(100)
      .build();
    transaction.sign(receivingKeys);
    return server.submitTransaction(transaction);
  })
  .then(console.log)

  // Second, the issuing account actually sends a payment using the asset
  .then(function() {
    return server.loadAccount(issuingKeys.publicKey())
  })
  .then(function(issuer) {
    var transaction = new StellarSdk.TransactionBuilder(issuer, {
      fee: 100,
      networkPassphrase: StellarSdk.Networks.PUBLIC
    })
      .addOperation(StellarSdk.Operation.payment({
        destination: receivingKeys.publicKey(),
        asset: token,
        amount: '100'
      }))
      // setTimeout is required for a transaction
      .setTimeout(100)
      .build();
    transaction.sign(issuingKeys);
    return server.submitTransaction(transaction);
  })
  .then(console.log)
  .catch(function(error) {
    console.error('Error!', error);
  });
