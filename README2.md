
## UTILITY TOKEN 

It is recommended to run the code on testnet before going to production.

1.  Create an issuing  and receiving accounts  here (https://www.stellar.org/laboratory/#account-creator?network=public).
    
    You ll get a set of public and secret keys for both accounts, e.g.
    Public Key	GC44YGV4UPT577MBAJERRAR3CBO7PV53I2IVG3AI5HNTRG6VHMPOULO3
    Secret Key	SBKXDTLTYGHSE536PZVFOGY2IXNXJCW7OEKDX5VN3LTMPK7TEKHXIUAA


2.  Create an object to represent the new asset (utility token)

3.  Receiving account must trust the token  and, optionally, limit the amount of tokens.It can also revoke the trust.

4.  Set a transaction time limit

5.  Issuing account  sends a payment using asset

6.  It can also set a transaction time limit

7. Add a `stellar.toml` file to provide clear infomration about the asset
