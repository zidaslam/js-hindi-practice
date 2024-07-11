const myarray=[0,1,2,3,4,5,6,'Hitesh']
const myarray2= new Array(11,12,13,14,15,16,17,18)
console.log(myarray[7])
console.log(myarray2);

// Array method =>'push'->we can add some element in exist array.
myarray.push('aslam') 
console.log(myarray)
// Array method =>'pop'->we can delete last element in exist array.
myarray2.pop()
console.log(myarray2)
// Array method =>'unshift'->we can add element in exist array starting.
myarray2.unshift(3)
// Array method =>'shift'->we can remove starting element in exist array .
myarray2.shift()
//Array method=>'include
console.log(myarray2.includes(8));
console.log(myarray2.indexOf(13));
// Array method =>'join'->if exist array convert into string.
const newArry=myarray.join()
console.log(newArry)

//slice, splice

console.log("A",myarray);
const arry3=myarray.slice(1,4);
console.log("B",arry3)
console.log("E",myarray)
console.log("c",myarray2)
console.log(myarray2.splice(2,5))
console.log("D",myarray2)
//__________________________
