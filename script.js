var ang1=parseInt(prompt('enter a angle1'))
var ang2=parseInt(prompt('enter a angle2'))
var ang3=parseInt(prompt('enter a angle3'))
var total= ang1+ang2+ang3

if (total==180) {
    console.log('the triangle is valid');
}
else if (total!=180) 
{
    console.log('The triangle is not valid');
}