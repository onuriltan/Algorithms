function fizzbuzz(number) {
    let result = ''
    if(number % 3 === 0) result = result + 'Fizz'
    if(number % 5 === 0) result = result + 'Buzz'
    else result = number
    console.log(result)
    if(number > 1) fizzbuzz(number - 1)
}
fizzbuzz(20)