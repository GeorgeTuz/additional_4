
module.exports = function multiply(first, second) { 
var arr1 = first.split(''); 
var arr2 = second.split(''); 
for (var i=0; i<arr1.length; i++) { 
arr1[i] = +arr1[i]; 
} 
for (var i=0; i<arr2.length; i++) { 
arr2[i] = +arr2[i]; 
} 
arr1.reverse(); 
arr2.reverse(); 
var t,ed,des,g,slEd,slDes,lonG = 0; 
var mass = []; 
var arrEnd = []; 

if (arr1.length < arr2.length) { 
var promPer = arr1; 
arr1 = arr2; 
arr2 = promPer; 
} 


var col_nul = 0; 
for (var i=0; i<arr1.length; i++) { 
if(arr1[i] === 0) { 
arr1.shift(); 
col_nul++; 
} else { 
i = arr1.length; 
} 
} 
for (var i=0; i<arr2.length; i++) { 
if(arr2[i] === 0) { 
arr2.shift(); 
col_nul++; 
} else { 
i = arr2.length; 
} 
} 
for (var i=0; i<arr2.length; i++) { 
mass[i] = []; 
} 

for (var i=0; i<arr2.length; i++) { 
des = 0; 
for (var j=0; j<arr1.length; j++) { 
t = arr1[j]*arr2[i]+des; 
if (t >= 10) { 
ed = t%10; 
mass[i].push(ed); 
des = Math.floor(t/10); 
} else { 
mass[i].push(t); 
des = 0; 
} 
if ((j === arr1.length - 1) && (des != 0)) { 
mass[i].push(des); 
} 
} 
for (var p=0; p<i; p++) { 
mass[i].unshift(0); 
} 
for (var p=arr2.length-2-i; p>0; p--) { 
mass[i].push(0); 
} 


} 

for (var i=0; i<arr2.length; i++) { 
if (lonG < mass[i].length) { 
lonG = mass[i].length; 
} 
} 

for (var i=0; i<arr2.length; i++) { 
if (lonG > mass[i].length) { 
mass[i].push(0); 
} 
if (lonG > mass[i].length) { 
mass[i].push(0); 
} 
} 


slDes = 0; 
for (var j=0; j<mass[mass.length-1].length; j++) { 
g = 0; 
for (var i=0; i<mass.length; i++) { 
g = mass[i][j] + g; 
if (i === mass.length-1) { 
g = g + slDes; 
if (g >= 10) { 
slEd = g%10; 
arrEnd.push(slEd); 
slDes = Math.floor(g/10); 
g = 0; 
} else { 
arrEnd.push(g); 
slDes = 0; 
g = 0; 
} 
} 
} 
if ((j === mass[mass.length-1].length -1) && (slDes !=0)) { 
arrEnd.push(slDes); 
} 

} 

for (var i=0; i<col_nul; i++) { 
arrEnd.unshift(0); 
} 
arrEnd.reverse(); 
var strEnd = arrEnd.join(''); 
return strEnd; 
}
