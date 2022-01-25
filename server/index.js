const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const bip39 = require('bip39');
const Web3 = require('web3');
const ethers = require('ethers');
const web3 = new Web3();

app.get("/create", (req, res) => {
  try {
    const mnemonic = bip39.generateMnemonic();
    console.log(mnemonic)
    res.send(mnemonic);
  }
  catch (err) {
    res.send(err);
  }
});

app.post("/getAd", (req, res) => {
  const {pass, seedPhrase} = req.body;
  try {
    console.log(seedPhrase)
    const wallet = new ethers.Wallet.fromMnemonic(seedPhrase);
    web3.eth.accounts.encrypt(wallet.privateKey, pass);
    console.log(wallet.address)
    res.send(wallet.address);
  }
  catch (err) {
    res.send(err);
  }
});

app.post("/import", (req, res) => {
  const {mnemonic} = req.body;
  try {
    console.log(mnemonic)
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    console.log(wallet.address)
    res.send(wallet.address);
  }
  catch (err) {
    res.send(err);
  }
});


// const pk = ethers.Wallet.fromMnemonic(mnemonic).privateKey

// console.log(pk)

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});