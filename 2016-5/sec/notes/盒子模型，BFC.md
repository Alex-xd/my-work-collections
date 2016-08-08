### 盒子模型
顾名思义就是把每个元素都比喻成一个盒子。盒子的构成分为内容区content，内边距padding，边框border和外边距margin。
实际应用中最常见的就是计算盒子的宽高。说到这里就有一个我刚刚踩过的坑：关于盒模型的大小计算有一个重要的属性：`box-sizing`，而它的值有三个：`content-box`，`border-box`和`inherit`。
设置为content-box时，给元素设置的width和height分别应用到元素的内容区。这是个坑。当我设置width和heigh的值时想的是整个盒子的大小去计算，但实际上只有内容区的大小是width*height。
设置为border-box时就与上面相反了，为元素指定的任何padding和border都将在已设定的宽度和高度内进行绘制。
inherit就是继承父元素。

### BFC
BFC全名block formatting contexts,翻译过来就是块级格式化上下文
我第一次看到这个名字的时候是一脸懵逼，什么鬼。但是后来深入学习后我总结了一句话：** BFC就是一种属性，这种属性会影响着元素的定位以及与其兄弟元素之间的相互作用，是一种隔离了的容器。**
但在IE6和7中不支持此属性，而是采用私有属性hasLayout，据说有一堆bug。 IE6真是个坑。。。

想要激活一个元素的BFC属性很简单，有很多种方法：
1. `position:( absolute,fix )`
2. `overflow:( hidden,auto,scroll )`
3. `display:( inline-blocks，table-cells，table-captions )`
4. `float:( 除了none )`
5. 触发IE的hasLayout用`zoom:1`即可

只要给元素设置了以上这些值中的任意一个，就可以触发它的BFC。

** BFC的功能**最直观的感受就是它能将元素隔离出来，避免其他元素对它的一些影响。

1. BFC可以包住浮动的元素。在清除浮动的时候使用的`overflow:hidden`就是这个原理。
2. BFC可以让垂直方向上的两个元素的margin不发生折叠。
3. 浮动元素的块级兄弟元素会无视浮动元素的位置，尽量占满一整行，这样就会被浮动元素覆盖，如果为这个兄弟元素触发BFC就可以解决。

-张博元