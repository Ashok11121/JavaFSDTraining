let arr = [10,20,30,40,50,60];
let str = "javascript"
//for-of loop
for(let val of arr)
{
    console.log(val);
}
for(let ch of str)
{
    console.log(ch);
}
//for-in loop
for(let ind in arr)
{
    console.log(ind);
}
for(let ind in str)
{
    console.log(ind);
}
//forEach loop
arr.forEach((val,ind,a)=>{
    console.log(val,"->",ind,"->",a);
})
//map funtion
let prices = [120,130,140,145,567,678,789,890,900];
console.log(prices);
let discountprices = prices.map((x)=>{
    return x+250;
})
console.log(discountprices);
//filter funtion
let filtered = discountprices.filter((x)=>{
    return x>=500 && x<=1000;
})
console.log(filtered);
//reduce funtion
let reduced = filtered.reduce((acl,val)=>{
    return acl+val;
})
console.log(reduced);
