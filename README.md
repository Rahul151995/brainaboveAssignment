# brainaboveAssignment


Task---
1. Subscribe to Kafka Group " CandidateNameMMDD".
2. Use kafkaHost: '139.59.87.215:9092'.
3. Use topic: "live_gps_data".
4. Once, you subscribe successfully to group you will get the data as per below format.
{
topic: 'live_gps_data',
value: '{"imei":352093080381006,
"datetime":"2019-07-24T06:55:32.000Z", "lat":22.7000976,
"lng":75.8846976,
"speed":9,
"sat_count":21,
"direction":0,
"ignition":1,
"device_type":"d1",
"hdop":5,
"pdop":0,
"x_axis":0,
"y_axis":0,
"z_axis":0,
"odometer":10000,
"iofields":{}
}',
offset: 15480914,
partition: 8,
highWaterOffset: 15480915,
key: '352093080381006',
timestamp: 2019-07-24T06:56:32.115Z
}
5. For each IMEI, if the device is on same location for more than 1 min a notification should
be generated.
6. Data and Notification information should be inserted into Database.
7. Application should be capable of running under multiple workers and all workers should
connect to the same Kafka ConsumerGroup.
