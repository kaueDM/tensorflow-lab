import * as tf from '@tensorflow/tfjs'

const values = Array.from({ length: 15 }, _ => Math.floor(Math.random() * 100) + 1)
const shape = [5, 3]
const data = tf.tensor(values, shape)

data.print()

