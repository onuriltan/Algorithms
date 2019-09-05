# Big O Notation

**O:** stands for function we are evaulating
**n:** stands for the size of the input

## Constant Runtime

As the input size increases, if the runtime of the function is not changing, then it has a **constant runtime of O(1)**, for example;

**O(1)**

```javascript
function log(array) {
    console.log(array[0])
}
```

Above example always logs array's first element even array got bigger in size.

## Linear Runtime

As the input size increases, if the runtime of the function is **increases linearly to the input size** then it has a **runtime of O(n)**, for example;

**O(n)**

```javascript
function log(array) {
   for (element of array) {
       console.log(element)
   }
}
```

Above example will log every item in the array and as the array size increases the running time of function increases in linear

## Exponential Runtime

As the input size increases, if the runtime of the function is **increases exponentially(n^2, n^3, n^4) to the input size** then it **has a runtime of O(n^2) or O(n^3)** depending on the exponential, for example;

```javascript
function addAndLog(array) {
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
          console.log(array[i], array[j])
      }
   }
}
```

Above example logs every pair then can be created with an array and logs it, so it has a runtime of O(n^2), if there will be a 3 nested for loops it will have a runtime of O(n^3)


**<font color='red'>IMPORTANT NOTE!!: Exponential functions deifinitely will slow the applicaiton as the input given to the function will grow in size</font>**

## Logaritmic Runtime

As the input size increases, **runtime of the function will increase in logaritmic time**, for example if input size is **16 and increased to 32**, runtime will **increase from 4 to 5**,

  * log16 = **4** to log32 = **5**

Best example for this is Binary Search.

  **Binary Search:**

In binary search there are two inputs, sorted array and element, where we need to find element from sorted array.

  1. Instead of looking one by one, we look middle of the array

  2. If element is smaller than the middle element,then we erase the half of the array that is bigger than the element

  3. By dividing element to middle, we make iteration from O(n) to O(logn), for example;

     * 4000 elements, 0(log4000) = 12 iteration
     * O(4000) = 4000 iteration
     
**<font color='red'>From this info we can say that we need to aim logaritmic time in every algorithm</font>**
