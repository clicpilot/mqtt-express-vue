
export const metacode =
{
  "Device":[
    {
      "name":"DeviceType1",
      "metaSchema":{
        "metaAttr1":"String",
        "metaAttr2":"String"
      },
      "instanceSchema":{
        "attr1":"String",
        "attr2":"String"
      }
    }
  ],
  "Event":[
    {
      "name":"EventType1",
      "instanceSchema":{
        "attr1":"String",
        "attr2":"String"
      }
    }
  ],
  "User":[
    {
      "name":"UserType1",
      "instanceSchema":{
        "attr1":"String",
        "attr2":"String"
      }
    }
  ]
}


export const instancecode =
{
  "DeviceMeta": {
    "DeviceType1": {
      "metaAttr1":"X","metaAttr2":"x"
    },
  },
  "DeviceInstance":[
    {
      "type":"DeviceType1","attr1":"A","attr2":"a", "userid":"user1", "deviceid":"device1"
    },
    {
      "type":"DeviceType1","attr1":"B","attr2":"b", "userid":"user2", "deviceid":"device2"
    },
  ],
  "EventInstance":[
    {
      "type":"EventType1","attr1":"A","attr2":"a", "deviceid":"device1"
    },
    {
      "type":"EventType1","attr1":"B","attr2":"b", "deviceid":"device1"
    },
    {
      "type":"EventType1","attr1":"A","attr2":"a", "deviceid":"device1"
    },
    {
      "type":"EventType1","attr1":"B","attr2":"b", "deviceid":"device1"
    },
  ],
  "UserInstance":[
    {
      "type":"UserType1","attr1":"A","attr2":"a", "userid":"user1"
    },
    {
      "type":"UserType1","attr1":"B","attr2":"b", "userid":"user2"
    },
  ]
}
