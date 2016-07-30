### position:规定元素定位类型。 ### 
其值有static,absolute,fixed,relative,inherit
默认值为static。

absolute:绝对定位，相对于static定位以外的第一个父元素进行定位。
fixed:绝对定位，相对于浏览器窗口进行定位。网页小广告专用户。。。
relative:相对定位，相对自己定位，top设成100px它就会给自己的top加100。后果可想而知。。
static:默认值，值得注意的是这个会忽略 top, bottom, left, right 或者 z-index 声明。
inherit:继承爹的。

