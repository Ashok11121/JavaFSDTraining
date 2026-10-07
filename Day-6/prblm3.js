//check whether the given year is leap year or not
let year = 1600;
if(year % 400 == 0)
{
    console.log("Leap Year");
}
else if(year % 100 == 0)
{
    console.log("Not Leap year");
}
else if(year % 4 == 0)
{
    console.log("Leap Year");
}
else
{
    console.log("Not Leap year");
}