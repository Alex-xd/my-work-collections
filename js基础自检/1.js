function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//请写出以下输出结果：
Foo.getName();  			2
getName();					5(4)
Foo().getName();			1 
getName();					1
new Foo.getName();			2
new Foo().getName();		1(3)
new new Foo().getName();	1(3)

2
5   4
1   
1   
2
1   3
1   3
1   null
