var level = require('level')
var db = level(process.argv[2])
for(var i = 0; i<10; i++) {
db.get('key'+process.argv[i], function (err, value) {
    console.log('key'+process.argv[i]+'='+ value)
})
}
