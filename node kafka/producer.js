const {Kafka} = require("kafkajs")

const kafka = new Kafka({
    clientId: 'satish',
    brokers: ['localhost:9091']
  })

  const producer = kafka.producer();
  const runProducer = async () =>{
    await producer.connect()
    console.log("Producer Connected")
      // Send a batch of messages to a topic
  for (let i = 0; i < 5; i++) {
    await producer.send({
      topic: 'my-topic', // Replace with your topic
      messages: [
        { key: `key${i}`, value: `Hello Kafka ${i}` }, // Messages to send
      ],
    });

    console.log(`Message ${i} sent successfully`);
  }

  // Disconnect the producer
  await producer.disconnect();
};
  

  runProducer().catch(console.error)