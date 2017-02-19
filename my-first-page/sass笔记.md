# sass/scss 笔记 #
## 一、基本用法 ##
Sass和Scss是可以互换的
`$ sass-convert path/style.sass path/style.scss`
`$ sass-convert path/style.scss path/style.sass`

将Scss文件转换成CSS文件
`$ scss --update path/style.scss:path/style.css`

Scss提供了4种输出风格
```
//嵌套方式，默认
$ scss --update path/style.scss:path/style.css --style nested

//每个样式的class和属性各占一行，适合开发环境
$ scss --update path/style.scss:path/style.css --style expanded

//每个样式各占一行，适合开发环境
$ scss --update path/style.scss:path/style.css --style compact

//压缩方式，适合线上发布环境使用
$ scss --update path/style.scss:path/style.css --style compressed    
```

Scss监视.scss文件
```
//监视整个文件夹
$ scss --watch scss_path:css_path

//监视单个文件
$ scss --watch scss_path/style.scss:css_path/style.css
```

## 二、变量 ##

### 变量的类型： ###
1. 数字（e.g. 2，3，10px）
2. 有引号或者没有引号的文本字符（e.g. foo,"foo",'foo'）
3. 色值（e.g. blue，#333，rgba(255,255,255,0.5)）
4. 布尔型（e.g. true，false）
5. 空（e.g. null）
6. 列表值，用空格或逗号分隔（e.g. 3px solid #333, Arial, sans-serif）
7. sass 3.3.4中新增加一种数据类型map(映射类型)（e.g. $map:(key1:value1,key2:value2,key3:value3) ）

* #### 列表变量可以和function配合使用 ####
length($list)
nth($list,$index)
index($list,$value)
append($list,$value[,separator])
join($list1,$list2[,separator])
zip($lists...)
list-separator(#list)<br>
@each $var in <list>
```
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

* #### map类型变量同样有封装好的function可以使用 ####
map-get($map, $key)
map-merge($map1, $map2)
map-remove($map, $key)
map-keys($map)
map-value($map)
map-has-key($map, $key)
keywords($args)

* #### ps: map类型也可以嵌套，而且里面的值的类型可以不一样，即： ####
```
$map: (
  'this': 'is',             //string
  'a': ('great', 'test'),   //list
  'isn\'t it?': true,       //bool
  'and this': 42,           //number
  'and': ('also', 'this'),  //list
  'nested': (
    'map': 1337
  )                         //map
);
```

## ‘@’规则和指令 ##
@import
@media
@mixin
@extend
@include
@content
@function
@at-root
@debug
@warm

## 控制命令 ##
@if
@for
@each
@while