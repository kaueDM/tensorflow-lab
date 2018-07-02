import * as tf from '@tensorflow/tfjs'

// const values = Array.from({ length: 30 }, _ => Math.floor(Math.random() * 100) + 1)
// const shape = [2, 5, 3]
// const myTensor = tf.tensor(values, shape)

// myTensor.print()

// myTensor.data()
//     .then(extractedData => console.log(extractedData))
//     .catch(_ => console.log('RIP'))

tf.tidy(_ => {
    const values = Array.from({ length: 6 }, _ => Math.floor(Math.random() * 6) + 1)
    const shape = [2, 3]
    const myFirstTensor = tf.tensor2d(values, shape)
    const mySecondTensor = tf.tensor2d(values, shape)
    const transposedTensor = mySecondTensor.transpose()
    const multipliedMatrices = myFirstTensor.matMul(transposedTensor)

    multipliedMatrices.print()
})