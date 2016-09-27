// 思路一
//-----------------------------
function duplicates1(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            arr[i] == arr[j] && result.indexOf(arr[i]) == -1 && result.push(arr[i]);
        }
    }
    return result;
}

// 思路二
//-----------------------------
function duplicates2(arr) {
    var result = [];

    arr.forEach(function(elem) {
        if (arr.indexOf(elem) != arr.lastIndexOf(elem) && result.indexOf(elem) == -1) {
            result.push(elem);
        }
    });
    return result;
}


// 思路三
//-----------------------------
function duplicates3(arr) {
    var a = arr.sort(sortfix),
        result = [];

    for (var i = 0; i < arr.length; i++) {
        if (a[i] == a[i - 1] && result.indexOf(a[i]) == -1) result.push(a[i]);
    }
    return result;
}

function sortfix(a, b) {
    return a - b;
}

// 思路四
//-----------------------------
function duplicates4(arr) {
    //声明两个数组，a数组用来存放结果，b数组用来存放arr中每个元素的个数
    var result = [],
        b = [];
    //遍历arr，如果以arr中元素为下标的的b元素已存在，则该b元素加1，否则设置为1
    for (var i = 0; i < arr.length; i++) {
        if (!b[arr[i]]) {
            b[arr[i]] = 1;
            continue;
        }
        b[arr[i]]++;
    }
    //遍历b数组，将其中元素值大于1的元素下标存入a数组中
    for (var i = 0; i < b.length; i++) {
        if (b[i] > 1) {
            result.push(i);
        }
    }
    return result;
}


// 思路五
//-----------------------------
function duplicates5(arr) {
    var obj = {};
    var result = [];
    //遍历数组，将数组的值作为obj的索引，出现次数为值
    arr.forEach(function(item) {
        if (obj[item]) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }
    });
    //获取对象自身属性
    var propertyNames = Object.getOwnPropertyNames(obj);
    //遍历对象，将重复出现的元素取出
    propertyNames.forEach(function(item) {
        if (obj[item] > 1) {
            result.push(parseInt(item));
        }
    });
    return result;
}




// 性能测试
//-----------------------------
function benchmark(f1, f2, f3, f4, f5) {
    var sum = [0, 0, 0, 0, 0],
        count = 1;
    for (var i = 0; i < sum.length; i++) {
        for (var j = 0; j < count; j++) {
            sum[i] += test(arguments[i]([1, 2, 4, 4, 3, 3, 1, 5, 3]));
            console.log('计算中...');
        }
        sum[i] /= count;
    }

    sum.forEach(function(e, i, a) {
        console.info('方法 ' + (i+1) + ' 的单位时间（1秒）内平均运算量: ' + e + '次');
    })

    

    function test(func) {
        var hz,
            period,
            startTime = new Date,
            runs = 0;
        do {
            func;
            runs++;
            totalTime = new Date - startTime;
        } while (totalTime < 1000);

        // 将毫秒转为秒
        totalTime /= 1000;


        hz = (runs * 1000) / totalTime;

        return hz;
    }
}


benchmark(duplicates1,duplicates2,duplicates3,duplicates4,duplicates5);
