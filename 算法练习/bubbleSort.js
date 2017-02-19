//冒泡排序
function bubbleSort(arr) {
	var a=arr.slice();
    for (var i = 0, l = a.length; i < l; i++) {
        for (var j = l - 1; j >= i; j--) {
            if (a[j] > a[j + 1]) {
                var temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    return a;
}

//快排
function quickSort(arr) {

    if(arr.length<=1) {
        return arr;
    }

    let leftArr = [];
    let rightArr = [];
    let q = arr[0];
    for(let i = 1,l=arr.length; i<l; i++) {
        if(arr[i]>q) {
            rightArr.push(arr[i]);
        }else{
            leftArr.push(arr[i]);
        }
    }

    return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
}





//测试
var arr=[];
for(var i=0;i<1000;i++){
	arr[i]=Math.floor(Math.random()*1000);
}
console.time();
// console.log("排序前 "+ arr);
// console.log("排序后 "+ bubbleSort(arr));
quickSort(arr)
console.timeEnd();









