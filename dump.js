const keythereum = require("keythereum");

const datadir = "/Path/To/Geth/DataDirectory";
const address = "0x0";

const keyObject = keythereum.importFromFile(address, datadir);
//console.log(keyObject);
const privateKey = keythereum.recover("_KEY_PASSPHRASE_", keyObject);
console.log(privateKey.toString("hex"));
