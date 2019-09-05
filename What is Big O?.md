# Big O Notation

## <font color='red'>Constant Runtime</font>

As the input size increases, if the runtime of the function is not changing, then it has a **constant time of O(1)**, for example;

**O(1)**

```javascript
function log(array) {
    console.log(array[0])
}
```

Above example always logs array's first element even array got bigger in size.

## <font color='red'>Linear Runtime</font>

As the input size increases, if the runtime of the function is **increases linearly to the input size** then it has a **complexity of O(n)**, for example;

**O(n)**

```javascript
function log(array) {
   for (element of array) {
       console.log(element)
   }
}
```

Above example will log every item in the array and as the array size increases the running time of function increases in linear

