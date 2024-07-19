//Array program
// creating new array with given length
function size(a){
let arr=new Array(a);
console.log(arr);
}
size(5)


//difference between two arrays
function diff(){
    let arr1=[1,2,3,4,5];
    let arr2=[3,5,6,7,8];
    let diff=arr1.filter((x) => !arr2.includes(x));
    console.log(diff);
}
diff()
//intersection
function Intersection(ar1, ar2) {
const intersectionResult = ar1.filter(x => ar2.indexOf(x) !== -1);
  return intersectionResult;
}
const ar1 = [1, 2, 3, 5, 9];
const ar2 = [1, 3, 5, 8];
const result = Intersection(ar1, ar2);
console.log(result);

//inserting an element at specific position
function insertElement() {
    let ar = [1, 2, 6, 4, 5];
    let index = 2;
    let element =3 ;

    ar.splice(index, 0, element);
    
    console.log(ar);
}
insertElement();

//flatting
let array=[[1,2],[2,5],[6,7]]
let newarray=array.flat();
console.log(newarray);