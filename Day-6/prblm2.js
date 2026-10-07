//fizz - buzz problem
//if num is multiple of 3 is fizz
//if num is multiple of 5 is buzz
//if num is multiple of 15 is fizz-buzz
let num = 15;
if(num % 15 == 0)
{
    console.log("Fizz-Buzz");
}
else if(num % 3 == 0)
{
    console.log("Fizz");
}
else if(num % 5 == 0)
{
    console.log("Buzz");
}
else{
    console.log(num);
}