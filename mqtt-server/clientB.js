var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost')

client.on('connect', function () {
  client.subscribe('instancedata')
  // client.publish('presence', 'Hello mqtt')
  //
  // setTimeout(function(){
  //   client.publish('presence', 'Hello mqtt2');
  // }, 2000)

})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  // client.end()
})
