### Stellar gives us a brilliant way to create and control your own token. Token name-TRUST, total amount-500,000,000 units.

1. Go to the [Stellar Laboratory](https://www.stellar.org/laboratory#account-creator?network=test), 
ensure “Test” is selected, then click “Generate keypair”
and keep a note of the public and secret keys in a safe place.
This will be your **issuing account**.


Public Key	GBDJB7S5FWX5ESINHKCO2XPJLII2EGF53BXBVHAWSTZ27RR5U3QDFSTN, 
Secret Key	SA7LJPMNEFNRC3WGHAWNCLIR5JGFQPKAVEJG5LDEFNK446AMDS3VKV4R


2. Next, click “Fund this account on the test network using the friendbot tool below”.
This will copy your public key into the text box, then click ‘Get test network lumens’

3. Follow steps 1 and 2 above to create and fund another account (**distribution acc.**)
and make a note of the public and private keys as well.

Public Key	GCJQ7KWSJZJYBRCHJVDUDFJ7B6T6F3OZQ5HZSZMYQD2IXGUJA6UTMP3G, 
Secret Key	SDEZUYJHYHYP4QF6HLSCVRRX2VDZ6HZEWSQZFBPYVKUZLMXVSM7MNLRC	

4. Once you have done this you can check to ensure both accounts have a balance by 
appending each public key individually to the end of this URL: 
https://horizon-testnet.stellar.org/accounts/YOURPUBLICKEY

5. This page will return a JSON object and part way down 
you should notice a balance of 10,000 testnet Lumens.
Like this:

`"balances": [
    {
      "balance": "10000.0000000",
      "buying_liabilities": "0.0000000",
      "selling_liabilities": "0.0000000",
      "asset_type": "native"
    }
  ], `
  
6. Create a Trustline between the issuing and distribution account
To do this go to the transaction builder page (https://www.stellar.org/laboratory/#txbuilder?network=test)

7. Enter the public key for the distribution account into the source account field.
Click the button “Fetch next sequence number for account starting with..”

8. Skip  **Base Fee, Memo and Time Bounds** fields.Move down to operation type and set that to “Change Trust”
Set the “Asset” to Alphanumeric 4 or 12 depending on the number of characters you want to use and enter the Asset code of your choosing. Enter name of your token (e.g. TRUST) in the asset code field.

9. Set the “Issuer Account ID” field to your Issuing accounts public key.
In the “Trust Limit” field enter the number of tokens you want to generate (e.g. 500,000,000).

10. To complete the transaction click the “Sign in Transaction Signer” button at the bottom of the page. 
On the next page scroll to the bottom to the signatures section.
:exclamation: For this example we will add our distribution account secret key in the “Add Signer” field. 
In reality, if we were doing this for real we would use a ledger to sign this transaction.

11. Once you have pasted the secret key scroll to the bottom and click “Submit to post transaction endpoint”.
You will then be directed to the Endpoint Explorer page, scroll to the bottom of this page and click the “Submit” button. 
Once this is successful you will receive a JSON Response below the submit button.Token is issued!:relaxed:

12. Our final step is to lock down the issuing account so that no more tokens can be generated for our new token.

13. Once again, go to the transaction builder page and enter the public key of the issuing account in the “source account” field and fetch the next sequence number, just like we did before.

14. Next scroll down and set the “Operation Type” to Set Options and the “Master Weight” to 0 and click “Sign Transaction in Signer” at the bottom of the page.Then add your issuing account secret key in the “Add Signer” field and click “Submit to post Transaction Endpoint”, then click “Submit” to finalize the transaction.

15. you created your first token on the amazing Stellar network, now go and check your new token on testnet by adding your distribution account into this url: (https://horizon-testnet.stellar.org/accounts/YOURDISTRIBUTIONPUBLICKEY)

`"balances": [
    {
      "balance": "0.0000000",
      "limit": "500000000.0000000",
      "buying_liabilities": "0.0000000",
      "selling_liabilities": "0.0000000",
      "last_modified_ledger": 434659,
      "is_authorized": true,
      "asset_type": "credit_alphanum12",
      "asset_code": "TRUST",
      "asset_issuer": "GBDJB7S5FWX5ESINHKCO2XPJLII2EGF53BXBVHAWSTZ27RR5U3QDFSTN"
    },
`



