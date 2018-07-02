# Tensorflow.js lab

### Setup
```
//Clone the repo:
git clone https://github.com/kaueDM/tensorflow-lab

//Install dependencies:
npm install

//If you dont have Parcel installed:
npm install -g parcel-bundler

//Run Parcel server:
parcel index.html
```

### Tensors

**Tensor:** The main building block of a Tensorflow neural net. Its a generic name for any **N-dimensional thing of numbers** and it's operations.

Examples of 'thing of numbers':

**Scalar:** A single number. Just it:

```
4. Or maybe 5.
```

**Vector:** Fancy word for Array:

```
[1,2,3,4, ...n]
```

**Matrix:** A 2-dimensional grid:

```
//I have no idea how i can represent this, so, this is my best:
| 1 2 3 |
| 4 5 6 |
| 7 8 9 |
```
**Building a Tensor:**

`tf.tensor(values, shape?, dtype?)`

**values:** Kinda obvious, huh?

**shape:** Dimension of a Tensor. 

It's 2x2 matrix? Easy, `[2,2]`

Or 3x1 matrix populated with 2x2 matrices? Not a problem: `[3,2,2]`

**dtype:** DataType. `float32`, `int32` or `boolean`

**Example**

Creating a Tensor with 5x3 (Rows x Columns, always) shape using 15 random numbers
between 1 and 100

>Input
```
const values = Array.from({ length: 15 }, _ => Math.floor(Math.random() * 100) + 1)
const shape = [5,3]
tf.tensor(values, shape).print()
```
>Output
```
[
    [29, 39, 42],
    [35, 11, 79],
    [16, 49, 82],
    [46, 66, 29],
    [53, 47, 76]
]
```

You understand how to create a Tensor now? Great! Now forget it and use the proper method
for each type of tensor. Doing this, you get a more readable code.

* `tf.scalar (value, dtype?)`: Rank-0 tensor (scalar). `value` is a single number.
* `tf.tensor1d (values, dtype?)`: Rank-1 tensor. `values` is an array of numbers.
* `tf.tensor2d (values, shape?, dtype?)`: Rank-2 tensor. `values` is a matrix of numbers.
* `tf.tensor2d (values, shape?, dtype?)`: Rank-3 tensor. `values` is a matrix of matrices. Exactly what we got in the example above.

## Operations

**Matrices multiplication**

`tf.matMul (a, b, transposeA?, transposeB?)`

* Works with rank-2 tensors only.
* The number of **cols** in `a` should match the **rows** in `b`. Or **TRANSPOSE** one of them.
* To transpose a rank-2 tensor, you should assign the new tensor (Tensors are **IMMUTABLE!**) to a new variable, or you will get a big error.

## Memory management

First of all, **Garbage collector is dead in TF.js lands.**
Why? Because we are working in the **GPU.** Tf.js needs to manage _'manually'_ the GPU memory to achieve a good speed in mathematical operations. So, pay attention to **memory leaks.**

**How much tensors do i have?**

`tf.memory().numTensors` will give you the answer.

After you used your tensors, you can manually dispose them using `dispose()` method.

```
const values = Array.from({ length: 6 }, _ => Math.floor(Math.random() * 6) + 1)
const shape = [2, 3]
const myFirstTensor = tf.tensor2d(values, shape)
const mySecondTensor = tf.tensor2d(values, shape)

//Do something meaningful with your tensor here...
const transposedTensor = mySecondTensor.transpose()
const multipliedMatrices = myFirstTensor.matMul(transposedTensor)

multipliedMatrices.print()

//...and dispose when they aren't necessary anymore
myFirstTensor.dispose()
mySecondTensor.dispose()
transposedTensor.dispose()

```

**OR**

Wrap your code with `tf.tidy()` and let the memory cleanup happens _automagically:_

```
tf.tidy(_ => {
    const values = Array.from({ length: 6 }, _ => Math.floor(Math.random() * 6) + 1)
    const shape = [2, 3]
    const myFirstTensor = tf.tensor2d(values, shape)
    const mySecondTensor = tf.tensor2d(values, shape)
    const transposedTensor = mySecondTensor.transpose()
    const multipliedMatrices = myFirstTensor.matMul(transposedTensor)

    multipliedMatrices.print()
})
```

If you don't want to dispose a tensor automatically inside the `tf.tidy()` method, you can call `tf.keep()` to, guess what, keep it.

```
tf.tidy(_ => {
    const values = Array.from({ length: 6 }, _ => Math.floor(Math.random() * 6) + 1)
    const shape = [2, 3]
    const myFirstTensor = tf.tensor2d(values, shape)
    const mySecondTensor = tf.tensor2d(values, shape)
    
    tf.keep(myFirstTensor)
    //Only mySecondTensor will be disposed.
})
```


