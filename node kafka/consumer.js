const {kafka} =  require('kafka')

const kafka = new Kafka({
    clientId: 'satish',
    brokers: ['localhost:9091']
  })

  const consumer = kafka.consumer({groupId:'my-group'})

  const runconsumer = async() =>{
    await consumer.connect()
    console.log("Consumer Connected")
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`Received message: ${message.value.toString()}`);
      },
    });
  }

  runconsumer().catch(console.error())