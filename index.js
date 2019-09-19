var web3 = require('web3');
var web3 = new web3(web3.givenProvider || 'ws://localhost:8545');

web3.eth.getAccounts(console.log);


