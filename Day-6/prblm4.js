//check whether given number is prime or not
let isPrime = true;
let num = 7;
for(let i=2;i<=Math.sqrt(num);i++)
{
    if(num % i == 0)
    {
        isPrime = false;
        break;
    }
}
if(isPrime)
{
    console.log("Prime");
}
else
{
    console.log("Not Prime");
}