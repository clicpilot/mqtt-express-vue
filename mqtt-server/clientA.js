var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost')

client.on('connect', function () {
  // client.subscribe('presence')

var msg = `
[
{
  "class":"User","type":"UserType1","user_attr1":"C","user_attr2":"c", "userid":"user1"
},
{
  "class":"User","type":"UserType1","user_attr1":"D","user_attr2":"d", "userid":"user2"
},
]
`;

  client.publish('instancedata', msg)



})

// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString())
//   // client.end()
// })
