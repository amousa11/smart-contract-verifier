var express = require('express');
var solc = require('solc');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // getting the development snapshot
    solc.loadRemoteVersion('latest', function (err, solcSnapshot) {
    	if (err) {
    		// An error was encountered, display and quit
    	}
    	var output = solcSnapshot.compile("contract t { function g() {} }", 1)
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



module.exports = router;
