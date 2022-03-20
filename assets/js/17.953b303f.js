(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{499:function(t,a,s){"use strict";s.r(a);var _=s(14),n=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("类文件结构详解上篇")]),t._v("一文中，我们介绍了class文件的构成，整个class文件一共包含3部分共16个属性：")]),t._v(" "),s("ul",[s("li",[t._v("3个描述文件属性的数据项：魔数和主次版本号")]),t._v(" "),s("li",[t._v("11个描述类属性的数据项：类、字段、方法等信息")]),t._v(" "),s("li",[t._v("2个描述代码属性的数据项：属性表，描述方法体内的具体内容")])]),t._v(" "),s("p",[t._v("其中文件属性和类属性在上一篇中已经有过介绍，本文将主要介绍一下属性表。")]),t._v(" "),s("p",[t._v("后续的讲解我们会使用下面的类作为样例，附上代码：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hukai"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bytecode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParseException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 属性测试\n *\n * @author hukai\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AttributeDemo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 被final修饰并且直接赋值,数据类型为基本类型或字符串类型,生成ConstantValue属性进行初始化")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" anInt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 被final修饰并且直接赋值,数据类型不为基础类型，在实例构造器`init`方法里初始化")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" anDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在`clinit`方法（静态代码块）里初始化")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" bnInt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Deprecated")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" bnDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Transient")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("convertToString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" dateString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParseException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dateString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NullPointerException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"字符串为空"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),t._v(" sdf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyy-MM-dd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sdf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dateString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NullPointerException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayIndexOutOfBoundsException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"出现异常"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sms")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" phone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPhone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" phone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPhone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" phone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" phone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br")])]),s("h2",{attrs:{id:"属性表结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性表结构"}},[t._v("#")]),t._v(" 属性表结构")]),t._v(" "),s("p",[t._v("属性表(attribute_info)在前面的讲解之中已经出现过数次，在Class文件、字段表、方法表都可以携带自己的属性表集合，以用于推述某些场景专有的信息。其结构如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513172928.png",alt:""}})]),t._v(" "),s("p",[t._v("对于每个属性(attribute_info)，它的名称需要从常量池中引用一个CONSTANT_Utf8_info类型的常量来表示，而属性值的结构则是完全自定义的，只需要通过一个u4的长度属性去说明属性值所占的位数即可。一个符合规则的属性表应该满足下表中所定义的结构：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("attribute_name_index")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u4")]),t._v(" "),s("td",[t._v("attribute_length")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u1")]),t._v(" "),s("td",[t._v("info")]),t._v(" "),s("td",[t._v("attribute_length")])])])]),t._v(" "),s("p",[t._v("为了能正确解析Class文件，Java虚拟机规范中预定义了21项虛拟机实现应当能识别的属性，下文中将对其中一些属性中的关键常用的部分进行讲解。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性名称")]),t._v(" "),s("th",[t._v("使用位置")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Code")]),t._v(" "),s("td",[t._v("方法表")]),t._v(" "),s("td",[t._v("Java代码编译成的字节码指令")])]),t._v(" "),s("tr",[s("td",[t._v("ConstantValue")]),t._v(" "),s("td",[t._v("字段表")]),t._v(" "),s("td",[t._v("final关键字定义的常量值")])]),t._v(" "),s("tr",[s("td",[t._v("Deprecated")]),t._v(" "),s("td",[t._v("类文件、字段表、方法表")]),t._v(" "),s("td",[t._v("被声明为deprecated的方法和字段")])]),t._v(" "),s("tr",[s("td",[t._v("Exceptions")]),t._v(" "),s("td",[t._v("方法表")]),t._v(" "),s("td",[t._v("方法抛出的异常")])]),t._v(" "),s("tr",[s("td",[t._v("InnerClasses")]),t._v(" "),s("td",[t._v("类文件")]),t._v(" "),s("td",[t._v("内部类列表")])]),t._v(" "),s("tr",[s("td",[t._v("LineNumberTale")]),t._v(" "),s("td",[t._v("Code属性")]),t._v(" "),s("td",[t._v("Java源码的行号与字节码指令的对应关系")])]),t._v(" "),s("tr",[s("td",[t._v("LocalVariableTable")]),t._v(" "),s("td",[t._v("Code属性")]),t._v(" "),s("td",[t._v("方法的局部变量描述")])]),t._v(" "),s("tr",[s("td",[t._v("SourceFile")]),t._v(" "),s("td",[t._v("类文件")]),t._v(" "),s("td",[t._v("源文件名称")])]),t._v(" "),s("tr",[s("td",[t._v("Synthetic")]),t._v(" "),s("td",[t._v("类文件、方法表、字段表")]),t._v(" "),s("td",[t._v("标识方法或字段是由编译器自动生成的")])])])]),t._v(" "),s("h2",{attrs:{id:"code属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code属性"}},[t._v("#")]),t._v(" Code属性")]),t._v(" "),s("h3",{attrs:{id:"属性详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性详解"}},[t._v("#")]),t._v(" 属性详解")]),t._v(" "),s("p",[t._v("Java程序方法体中的代码经过Javac编译器处理后，最终变为字节码指令存储在Code属性内。Code属性出现在方法表的属性集合之中，但并非所有的方法表都必须存在这个屬性，譬如接口或者抽象类中的方法就不存在Code属性，如果方法表有Code属性存在，那么它的结构如下所示：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("attribute_name_index")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u4")]),t._v(" "),s("td",[t._v("attribute_length")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("max_stack")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("max_locals")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u4")]),t._v(" "),s("td",[t._v("code_length")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u1")]),t._v(" "),s("td",[t._v("code")]),t._v(" "),s("td",[t._v("code_length")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("exception_table_length")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("exception_info")]),t._v(" "),s("td",[t._v("exception_table")]),t._v(" "),s("td",[t._v("exception_table_length")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("attributes_count")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("attribute_info")]),t._v(" "),s("td",[t._v("attributes")]),t._v(" "),s("td",[t._v("attributes_count")])])])]),t._v(" "),s("p",[t._v("下面对这些数据项逐一讲解：")]),t._v(" "),s("ul",[s("li",[t._v("attribute_name_index是一个指向常量池中某一个CONSTANT_Utf8_info常量的索引，取值固定为Code。代表了该属性的属性名称")]),t._v(" "),s("li",[t._v("attribute_length指示了属性值的长度，由于属性名称索引与属性长度一共为6字节，所以属性值的长度固定为整个属性表长度减去6个字节")]),t._v(" "),s("li",[t._v("max_stack表示操作数栈的最大深度，jvm运行时会根据这个值来分配栈帧中的操作数栈深度")]),t._v(" "),s("li",[t._v("max_locals表示局部变量表所需要的存储空间，单位为slot。并不是所有局部变量占用的slot之和，当一个局部变量的生命周期结束后，其所占用的slot将分配给其它依然存活的局部变量使用，按此方式计算出方法运行时局部变量表所需的存储空间")]),t._v(" "),s("li",[s("strong",[t._v("code_length和code用来存储Java源程序编译后生成的字节码指令")]),t._v("。code_length代表字节码长度，code是用于存储字节码指令的一系列字节流。那么每个指令就是一个u1类型的单字节，当虚拟机读取到code中的一个字节码时，就可以对应找出这个宇节码代表的是什么指令.并且可以知道这条指令后面是否需要跟随参数，以及参数该如何理解")]),t._v(" "),s("li",[t._v("exception_table_length表示异常表占用的字节数")]),t._v(" "),s("li",[t._v("exception_table表示具体的异常表")]),t._v(" "),s("li",[t._v("Code属性本身还有自己的一些属性表，包括LineNumberTable、LocalVariableTable和StackMapTable，这些属性不是必须的，如果有的话，会在attributes_count和attributes中体现出来")])]),t._v(" "),s("p",[s("em",[t._v("tips：Slot，虚拟机为局部变量分配内存所使用的最小单位，长度不超过32位的数据类型占用1个Slot，64位的数据类型（long和double）占用2个Slot")])]),t._v(" "),s("h3",{attrs:{id:"实例解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例解析"}},[t._v("#")]),t._v(" 实例解析")]),t._v(" "),s("p",[t._v("使用javap -v命令解析字节码内容，查看convertToString方法的解析结果如下：\n"),s("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513173042.png",alt:""}})]),t._v(" "),s("p",[t._v("stack=3, locals=4分别代表了max_stack=3和max_locals=4，即操作数栈的最大深度为3，局部变量表所需要的存储空间为4 slot。")]),t._v(" "),s("p",[t._v("arg_size代表参数个数。需要注意的是如果方法不是static修饰的，会自带一个this参数，此时arg_size=入参个数+1。"),s("strong",[t._v("虚拟机在解析class文件中的方法时，会判断参数数量args_size是否大于MAX_ARGS_SIZE，如果大于则就会报错了。MAX_ARGS_SIZE为255")]),t._v("。")]),t._v(" "),s("p",[t._v("后续为编译出的字节码指令，在此不做详解。")]),t._v(" "),s("p",[t._v("最后为exception_table属性，很明显他对应着try catch这种东西，如果你的代码里没有try catch代码块，是不会生成exception_table的，它的结构如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("start_pc")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("end_pc")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("handler_pc")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("catch_type")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("p",[t._v("start_pc和end_pc划分了try{}，其对应字节码指令的行号，而catch_type代表了catch（exception）里面的那个参数exception，如果抓到异常就转到handler_pc处理。")]),t._v(" "),s("h2",{attrs:{id:"exceptions属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exceptions属性"}},[t._v("#")]),t._v(" Exceptions属性")]),t._v(" "),s("h3",{attrs:{id:"属性详解-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性详解-2"}},[t._v("#")]),t._v(" 属性详解")]),t._v(" "),s("p",[t._v("这里的Exceptions属性是在方法表中与Code属性平级的一项属性，不是前面讲的异常表。Exceptions属性的作用是列举出方法中可能抛出的受査异常，也就是方法描述时在throws关键字后面列举的异常。结构如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("attribute_name_index")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u4")]),t._v(" "),s("td",[t._v("attribute_length")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("number_of_exceptions")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("exception_index_table")]),t._v(" "),s("td",[t._v("number_of_exceptions")])])])]),t._v(" "),s("ul",[s("li",[t._v("number_of_exceptions表示可能抛出number_of_exceptions种\n受查异常")]),t._v(" "),s("li",[t._v("exception_index_table为异常索引集合，一组u2类型\nexception_index的集合，每一个exception_index为一个指向常量池中一CONSTANT_Class_info型常量的索引，代表该受查异常的类型")])]),t._v(" "),s("h3",{attrs:{id:"实例解析-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例解析-2"}},[t._v("#")]),t._v(" 实例解析")]),t._v(" "),s("p",[t._v("使用IDEA的jclasslib插件查看字节码信息，可以看到convertToString方法的Exceptions属性分析结果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513173101.png",alt:""}})]),t._v(" "),s("p",[t._v("可以看到声明了RuntimeException和ParseException两个异常，皆为throws关键字后面列举的异常。")]),t._v(" "),s("h2",{attrs:{id:"linenumbertable属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linenumbertable属性"}},[t._v("#")]),t._v(" LineNumberTable属性")]),t._v(" "),s("h3",{attrs:{id:"属性详解-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性详解-3"}},[t._v("#")]),t._v(" 属性详解")]),t._v(" "),s("p",[s("strong",[t._v("LineNumberTable属性用于描述Java源码行号与字节码行号之间的对应关系")]),t._v("，它并不是运行时必需的属性，但默认会生成到Class文件之中，可以在Javac中分别使用-g:none或-g:lines选项来取消或要求生成这项信息。")]),t._v(" "),s("p",[s("strong",[t._v("如果选择不生成LineNumberTable属性，对程序运行产生的最主要的影响就是当抛出异常时，堆栈中将不会显示出错的行号，并且在调试程序的时候，也无法按照源码行来设置断点")]),t._v("。属性结构如下表：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("attribute_name_index")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u4")]),t._v(" "),s("td",[t._v("attribute_length")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("line_number_table_length")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("line_number_info")]),t._v(" "),s("td",[t._v("line_number_table")]),t._v(" "),s("td",[t._v("line_number_table_length")])])])]),t._v(" "),s("p",[t._v("line_number_table是一个数量为line_number_table_length、类型为line_number_info的集合，line_number_info结构如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("start_pc")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("字节码偏移量")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("line_number")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("java源文件行号")])])])]),t._v(" "),s("h3",{attrs:{id:"实例分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例分析"}},[t._v("#")]),t._v(" 实例分析")]),t._v(" "),s("p",[t._v("使用jclasslib插件查看convertToString方法的Code属性下的LineNumberTable属性如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513173116.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"localvariabletable属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localvariabletable属性"}},[t._v("#")]),t._v(" LocalVariableTable属性")]),t._v(" "),s("h3",{attrs:{id:"属性详解-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性详解-4"}},[t._v("#")]),t._v(" 属性详解")]),t._v(" "),s("p",[s("strong",[t._v("LocalVariableTable属性用于描述栈帧中局部变量表中的变量与Java源码中定义的变量之间的关系")]),t._v("，它也不是运行时必需的属性，但默认会生成到Class文件之中，可以在Javac中分别使用-g:none或-g:vars选项来取消或要求生成这项信息。")]),t._v(" "),s("p",[t._v("如果没有生成这项属性，最大的影响就是当其他人引用这个方法时，所有的参数名称都将会丢失，IDE将会使用诸如arg0、argl之类的占位符代替原有的参数名，这对程序运行没有影响，但是会对代码编写带来较大不便，而且在调试期间无法根据参数名称从上下文中获得参数值。其结构如下表：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("attribute_name_index")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u4")]),t._v(" "),s("td",[t._v("attribute_length")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("local_variable_table_length")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("local_variable_info")]),t._v(" "),s("td",[t._v("local_variable_table")]),t._v(" "),s("td",[t._v("local_variable_table_length")])])])]),t._v(" "),s("p",[t._v("其中local_variable_info项目代表了一个栈帧与源码中的局部变量的关联，其结构如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("start_pc")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("变量生命周期开始时的字节码偏移量")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("length")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("变量作用范围覆盖的字节数")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("name_index")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("索引值，指向变量名称")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("descriptor_index")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("索引值，指向变量描述符")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("index")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("变量在栈帧中slot的位置")])])])]),t._v(" "),s("h3",{attrs:{id:"实例分析-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例分析-2"}},[t._v("#")]),t._v(" 实例分析")]),t._v(" "),s("p",[t._v("查看convertToString方法的Code属性下的LocalVariableTable属性如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513173132.png",alt:""}})]),t._v(" "),s("p",[t._v("可以看到虽然我们方法体中没有用到this关键字，但是LocalVariableTable中还是有this这个局部变量，其作用范围是整个方法体。当然，静态方法是不会有this这个局部变量的。")]),t._v(" "),s("h2",{attrs:{id:"sourcefile属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sourcefile属性"}},[t._v("#")]),t._v(" SourceFile属性")]),t._v(" "),s("p",[t._v("SourceFile属性用于记录生成这个class文件的源码文件名称。这个属性也是可选的，可以分别使用Javac的-g:none或-g:source选项来关闭或要求生成这项信息。")]),t._v(" "),s("p",[t._v("对大多数文件，类名和文件名是一致的，少数特殊类除外（如：内部类），如果不生成这项属性，抛出异常时，堆找中将不会显示出错代码所属的文件名。这是一个定长的属性，结构如下表：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("attribute_name_index")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u4")]),t._v(" "),s("td",[t._v("attribute_length")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("sourcefile_index")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("p",[t._v("sourcefile_index是指向常量池中一CONSTANT_Utf8_info类型常量的索引，常量的值为源码文件的文件名。实例如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513173146.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"constantvalue属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constantvalue属性"}},[t._v("#")]),t._v(" ConstantValue属性")]),t._v(" "),s("h3",{attrs:{id:"属性详解-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性详解-5"}},[t._v("#")]),t._v(" 属性详解")]),t._v(" "),s("p",[t._v("ConstantValue属性的作用是通知虚拟机自动为常量赋值。我个人对这个属性的理解是：当某个类变量被final修饰并且直接赋值，并且该变量的数据类型为基本类型或字符串类型，就生成ConstantValue属性进行初始化。如果变量不是基本类型或字符串类型，则在实例构造器"),s("code",[t._v("init")]),t._v("方法里初始化，若变量还被static修饰，则在静态初始化方法"),s("code",[t._v("clinit")]),t._v("里初始化。属性结构如下表：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("attribute_name_index")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u4")]),t._v(" "),s("td",[t._v("attribute_length")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("constantvalue_index")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("p",[t._v("constantvalue_index数据项代表了常量池中一个字面量常量的引用，它指向的应该是一个基本数据类型常量或者CONSTANT_String_info常量中的一种。")]),t._v(" "),s("h3",{attrs:{id:"实例分析-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例分析-3"}},[t._v("#")]),t._v(" 实例分析")]),t._v(" "),s("p",[t._v("AttributeDemo类中定义了四个字段，查看字节码分析结果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513173206.png",alt:""}})]),t._v(" "),s("p",[t._v("可以看到只有两个字段(anInt、bnInt)生成了ConstantValue属性，它们的共同特点是都被final修饰且为基本类型。")]),t._v(" "),s("h2",{attrs:{id:"innerclasses属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innerclasses属性"}},[t._v("#")]),t._v(" InnerClasses属性")]),t._v(" "),s("p",[t._v("InnerClasses属性用于记录内部类与宿主类之间的关联。如果一个类中定义了内部类，那编译器将会为它以及它所包含的内部类生成InnerClasses属性。结构如下表：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("attribute_name_index")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u4")]),t._v(" "),s("td",[t._v("attribute_length")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("number_of_classes")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("inner_classes_info")]),t._v(" "),s("td",[t._v("inner_classes")]),t._v(" "),s("td",[t._v("number_of_classes")])])])]),t._v(" "),s("p",[t._v("数据项number_of_classes代表需要记录多少个内部类信息，每一个内部类的信息都由一个inner_classes_info表进行描述。inner_classes_info表的结构如下表：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("inner_class_info_index")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("指向内部类CONSTANT_Class_info类型常量索引")])]),t._v(" "),s("tr",[s("td",[t._v("u4")]),t._v(" "),s("td",[t._v("outer_class_info_index")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("指向宿主类CONSTANT_Class_info类型常量索引")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("inner_name_index")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("索引值。指向内部类名称，如果为匿名内部类，则该值为0")])]),t._v(" "),s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("inner_name_access_flags")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("类似于access_flags，是内部类的访问标志")])])])]),t._v(" "),s("p",[t._v("实例分析如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513173220.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"deprecated及synthetic属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deprecated及synthetic属性"}},[t._v("#")]),t._v(" Deprecated及Synthetic属性")]),t._v(" "),s("p",[t._v("Deprecated和Synthetic两个属性都属于标志类型的布尔属性，只存在有和没存的区别，没有属性值的概念。")]),t._v(" "),s("p",[t._v("Deprecated属性用于表示某个类、字段或者方法，已经被程序作者定为不再推荐使用，它可以通过在代码中使用@dcprecated注释进行设置。")]),t._v(" "),s("p",[t._v("Synthetic属性代表此字段或者方法并不是由Java源码直接产生的，而是由编译器自行添加的。在JDK1.5之后，标识一个类、字段或者方法是编译器自动产生的，也可以设置它们访问标志中的ACC_SYNTHETIC标志位。")]),t._v(" "),s("p",[t._v("Deprecated和Synthetic属性的结构非常简单，如下表：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("u2")]),t._v(" "),s("td",[t._v("attribute_name_index")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("u4")]),t._v(" "),s("td",[t._v("attribute_length")]),t._v(" "),s("td",[t._v("1")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);