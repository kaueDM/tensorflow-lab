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

### Notes

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



