这是道~~送分题~~计算题

1. 最高的是 !important  会覆盖任何位置的元素样式。我觉得少用为好。
2. html里给元素标签里添加属性style="blablabla"。 不符合结构样式分离原则。
3. 上面这两个霸道横行的解决了剩下的就好办了，直接计算： 一个`#id`=100块，一个`.class`=10块，一个`tagName`等于1块。

e.g. 
```
#id1 .class1 .class2 h1 { 
	background-color:red; 
}
```
```
#id1 .class1 h1 {
	background-color:red; 
}
```

上面的有100+10+10+1=121块，下面的只有100+10+1=111块。谁钱多听谁的。