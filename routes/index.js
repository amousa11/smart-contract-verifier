var express = require('express');
var solc = require('solc');
var router = express.Router();
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/"));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/sendContractSource', function(req, res, next) {
    // getting the development snapshot
    solc.loadRemoteVersion('latest', function (err, solcSnapshot) {
    	if (err) {
    		// An error was encountered, display and quit
    	}
        // can hardcode "contract t { function g() {} }" for req
    	var output = solcSnapshot.compile(req.body, 1)
        var result = [];
        function getNames(obj, name) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if ("object" == typeof(obj[key])) {
                        getNames(obj[key], name);
                    } else if (key == name) {
                        result.push(obj[key]);
                    }
                }
            }
        }
        getNames(output, "runtimeBytecode");
        res.send(result);
    })
});

router.get('/hello', function (req, res, next) {
    // web3 is not working :\
    var code = web3.eth.getCode(req.body);
    res.send(code);
});

module.exports = router;
