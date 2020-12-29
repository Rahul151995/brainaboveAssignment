

const { Kafka } = require('kafkajs')


export class UserController {

    static async kafa(req, res, next) {

    
        const kafkas = new Kafka({
            brokers: ['139.59.87.215:9092'],
        })

        const option: any = {
            groupId: 'Rahul0815',

        }
        const consumer = kafkas.consumer({ groupId: 'rahulkumar0815' })
        await consumer.connect();
         await consumer.subscribe({ topic: 'live_gps_data',fromBeginning: true  })
        
        await consumer.connect();
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log({
                    key: message.key.toString(),
                    value: message.value.toString(),
                    headers: message.headers,
                })
            },
        })

      
    }





}