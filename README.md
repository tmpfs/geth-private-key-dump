# Geth Private Key Dump

USE THIS AT YOUR OWN RISK ONLY IF YOU KNOW WHAT YOU ARE DOING!

Geth does not support exporting private keys but you may want to move your private key to a paper wallet or import it into another wallet (eg: MetaMask) to perform some transactions.

This tiny script uses [keythereum][] to do that.

* Run `npm install`
* Set `datadir` to geth data directory.
* Set `address` to the public address of the key pair.
* Replace `_KEY_PASSPHRASE_` with your geth key passphrase.
* Disconnect from the internet.
* Run the script (`node dump.js`).
* Store the private key as a paper wallet or import into another wallet.
* Delete the password from the file.

[keythereum]: https://github.com/ethereumjs/keythereum/
