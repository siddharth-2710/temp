const amount = 12;
if(amount<10)
{
    console.log('Samll Number')
}
else{
    console.log('Large Number');
}
console.log(`Hey it's my first node app!!!`)
console.log(__dirname,__filename,module)
setTimeout(()=>{
    console.log('Hello')
},1000)
const sum = ((x,y)=>{
    return x+y;
})
console.log(sum(1,2))
console.log(module.exports)