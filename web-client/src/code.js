
export const metacode = `
{
  "Device":[
    {
      "name":"DeviceType1",
      "instanceSchema":{
        "class":{type:"String"},
        "type":{type:"String"},
        "device_attr1":{type:"String"},
        "device_attr2":{type:"String"},
        "userid":{type:"String"},
        "deviceid":{type:"String"}
      }
    }
  ],
  "Event":[
    {
      "name":"EventType1",
      "instanceSchema":{
        "class":{type:"String"},
        "type":{type:"String"},
        "event_attr1":{type:"String"},
        "event_attr2":{type:"String"},
        "deviceid":{type:"String"}
      }
    }
  ],
  "User":[
    {
      "name":"UserType1",
      "instanceSchema":{
        "class":{type:"String"},
        "type":{type:"String"},
        "user_attr1":{type:"String"},
        "user_attr2":{type:"String"},
        "userid":{type:"String"}
      }
    }
  ]
}
`

export const instancecode =`
[
  {
    "class":"Device","type":"DeviceType1","device_attr1":"A","device_attr2":"a", "userid":"user1", "deviceid":"device1"
  },
  {
    "class":"Device","type":"DeviceType1","device_attr1":"B","device_attr2":"b", "userid":"user2", "deviceid":"device2"
  },
  {
    "class":"Event","type":"EventType1","event_attr1":"A","event_attr2":"a", "deviceid":"device1"
  },
  {
    "class":"Event","type":"EventType1","event_attr1":"B","event_attr2":"b", "deviceid":"device1"
  },
  {
    "class":"Event","type":"EventType1","event_attr1":"A","event_attr2":"a", "deviceid":"device2"
  },
  {
    "class":"Event","type":"EventType1","event_attr1":"B","event_attr2":"b", "deviceid":"device2"
  },
  {
    "class":"User","type":"UserType1","user_attr1":"A","user_attr2":"a", "userid":"user1"
  },
  {
    "class":"User","type":"UserType1","user_attr1":"B","user_attr2":"b", "userid":"user2"
  },
]
`
