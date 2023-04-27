const { kafka } = require('./configure')

async function start() {
  const producer = kafka.producer()

  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello KafkaJS user! 222' },
    ],
  })
}

start()
