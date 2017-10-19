var express = require('express');
var solc = require('solc');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.post('/sendContractSource', function(req, res, next) {
    // getting the development snapshot
    solc.loadRemoteVersion('latest', function (err, solcSnapshot) {
    	if (err) {
    		// An error was encountered, display and quit
    	}
        // can hardcode "contract t { function g() {} }" for req
        
    	var output = solcSnapshot.compile(req.body.text, 1)
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

// router.get('/hello', function (req, res, next) {
//     // web3 is not working :\
//     // var code = web3.eth.getCode(req.body);
//     res.send(code);
// });

module.exports = router;
