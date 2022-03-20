(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{524:function(s,t,a){"use strict";a.r(t);var n=a(14),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"算法效率的度量方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法效率的度量方法"}},[s._v("#")]),s._v(" 算法效率的度量方法")]),s._v(" "),a("h4",{attrs:{id:"_1-事后统计方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-事后统计方法"}},[s._v("#")]),s._v(" 1. 事后统计方法")]),s._v(" "),a("p",[s._v("这种方法主要是"),a("strong",[s._v("通过设计好的测试程序和数据，利用计算机计时器对不同算法编制的程序的运行时间进行比较，从而确定算法效率的高低。")])]),s._v(" "),a("p",[s._v("这种方式非常容易受运行环境的影响，在性能高的机器上跑出来的结果与在性能低的机器上跑的结果相差会很大。而且对测试时使用的数据规模也有很大关系。再者，并我们在写算法的时候，还没有办法完整的去运行呢。")]),s._v(" "),a("h4",{attrs:{id:"_2-事前分析估算方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-事前分析估算方法"}},[s._v("#")]),s._v(" 2. 事前分析估算方法")]),s._v(" "),a("p",[s._v("在计算机程序编写前，依据统计方法对算法进行估算。")]),s._v(" "),a("p",[s._v("经过总结，我们发现一个高级语言编写的程序在计算机上运行时所消耗的时间取决于下列因素：")]),s._v(" "),a("ul",[a("li",[s._v("算法采用的策略，方案")]),s._v(" "),a("li",[s._v("编译产生的代码质量")]),s._v(" "),a("li",[s._v("问题的输入规模")]),s._v(" "),a("li",[s._v("机器执行指令的速度")])]),s._v(" "),a("p",[s._v("由此可见，"),a("strong",[s._v("抛开这些与计算机硬件、软件有关的因素，一个程序的运行时间依赖于算法的好坏和问题的输入规模")]),s._v("。（所谓的问题输入规模是指输入量的多少）")]),s._v(" "),a("p",[s._v("实现：1+2+…+99+100"),a("br"),s._v("\n第一种算法：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行1次")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行了n+1次")]),s._v("\n    sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行n次")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("第二种算法：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行1次")]),s._v("\nsum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行1次")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("第一种算法执行了1+(n+1)+n=2n+2次。\n第二种算法，是1+1=2次\n如果我们把循环看做一个整体，忽略头尾判断的开销，那么这两个算法其实就是n和1的差距。")]),s._v(" "),a("p",[s._v("分析一个算法的运行时间时，重要的是把基本操作的数量和输入模式关联起来。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512142318.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"函数的渐近增长"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的渐近增长"}},[s._v("#")]),s._v(" 函数的渐近增长")]),s._v(" "),a("p",[s._v("假设两个算法的输入规模都是n，\n算法A要做2n+3次操作，即：先执行n次的循环，执行完成后再有一个n次的循环，最后有3次运算。\n算法B要做3n+1次操作，理解同上\n哪一个更快些？")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512142338.png",alt:""}})]),s._v(" "),a("p",[s._v("当n=1时，算法A1效率不如算法B1;"),a("br"),s._v("\n当n=2时，两者效率相同；"),a("br"),s._v("\n当n>2时，算法A1就开始优于算法B1"),a("br"),s._v("\n随着n的继续增加，算法A1比算法B1 逐步拉大差距。所以总体上算法A1比算法B1优秀。")]),s._v(" "),a("p",[a("strong",[s._v("函数的渐近增长")]),s._v("：给定两个函数f(n)和g(n)，如果存在一个整数N，使得对于所有的n>N，f(n)总是比g(n)大，那么，我们说f(n)的增长渐近快于g(n)。")]),s._v(" "),a("p",[a("strong",[s._v("断一个算法的效率时，函数中的常数和其他次要项常常可以忽略，而更应该关注主项（最高项）的阶数")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[s._v("#")]),s._v(" 时间复杂度")]),s._v(" "),a("h4",{attrs:{id:"_1-算法时间复杂度定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-算法时间复杂度定义"}},[s._v("#")]),s._v(" 1. 算法时间复杂度定义")]),s._v(" "),a("blockquote",[a("p",[s._v("在进行算法分析时，语句总的执行次数T(n)是关于问题规模n的函数，进而分析T(n)随n的变化情况并确定T(n)的数量级。算法的时间复杂度，也就是算法的时间量度，记作：T(n)= O(f(n))。它表示随问题规模n的增大，算法执行时间的增长率和f(n)的增长率相同，称作算法的渐近时间复杂度，简称为时间复杂度。其中f(n)是问题规模n的某个函数。")])]),s._v(" "),a("p",[s._v("这样用大写O()来体现算法时间复杂度的记法，我们称之为大O记法。")]),s._v(" "),a("h4",{attrs:{id:"_2-推导大o阶方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-推导大o阶方法"}},[s._v("#")]),s._v(" 2. 推导大O阶方法")]),s._v(" "),a("p",[s._v("如何分析一个算法的时间复杂度呢？即如何推导大O阶呢？")]),s._v(" "),a("ul",[a("li",[s._v("++用常数1取代运行时间中的所有加法常数++。")]),s._v(" "),a("li",[s._v("++在修改后的运行次数函数中，只保留最高阶++项。")]),s._v(" "),a("li",[s._v("++如果最高阶项存在且不是1，则去除与这个项相乘的常数++。")])]),s._v(" "),a("p",[s._v("得到的最后结果就是大O阶。")]),s._v(" "),a("h4",{attrs:{id:"_3-常数阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-常数阶"}},[s._v("#")]),s._v(" 3. 常数阶")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行一次")]),s._v("\n    \t\nsum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行一次")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行一次")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这个算法运行次数函数是：f(n)=3，推导大O阶可得这个算法时间复杂度为O(1)。")]),s._v(" "),a("p",[a("strong",[s._v("这种与问题的大小（n的多少）无关，执行时间恒定的算法，我们称之为具有为O(1)的时间复杂度，又叫常数阶")]),s._v("。")]),s._v(" "),a("h4",{attrs:{id:"_4-线性阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-线性阶"}},[s._v("#")]),s._v(" 4. 线性阶")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行1次")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行n+1次")]),s._v("\n    sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行n次")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这个算法运行次数函数是：f(n) = 1+(n+1)+n = 2n+2。\n推导大O阶可得这个算法时间复杂度为O(n)，又叫线性阶。")]),s._v(" "),a("p",[s._v("线性阶一般含有非嵌套循环涉及线性阶，线性阶就是随着问题规模n的扩大，对应计算次数呈直线增长。")]),s._v(" "),a("h4",{attrs:{id:"_5-平方阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-平方阶"}},[s._v("#")]),s._v(" 5. 平方阶")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("          \n    \t\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("     \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"---"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("n等于100，也就是说外层循环每执行一次，内层循环就执行100次，那总共程序想要从这两个循环出来，需要执行100*100次，也就是n的平方。所以这段代码的时间复杂度为O(n^2^)。")]),s._v(" "),a("blockquote",[a("p",[s._v("总结：如果有三个这样的嵌套循环就是n^3^。所以总结得出，循环的时间复杂度等于循环体的复杂度乘以该循环运行的次数。")])]),s._v(" "),a("h4",{attrs:{id:"_6-对数阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-对数阶"}},[s._v("#")]),s._v(" 6. 对数阶")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("从上面代码可以看到，在while循环里面，每次都将 i 乘以 2，乘完之后，i 距离 n 就越来越近了。我们试着求解一下，假设循环x次之后，i 就大于 2 了，此时这个循环就退出了，也就是说 2 的 x 次方等于 n，那么 x = log2^n\n也就是说当循环 log2^n 次以后，这个代码就结束了。因此这个代码的时间复杂度为：O(logn)")]),s._v(" "),a("h4",{attrs:{id:"_7-常见的时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-常见的时间复杂度"}},[s._v("#")]),s._v(" 7. 常见的时间复杂度")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512142410.png",alt:""}})]),s._v(" "),a("p",[s._v("对应的线性图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512142428.png",alt:""}})]),s._v(" "),a("p",[s._v("常用的时间复杂度所耗费的时间从小到大依次是："),a("br"),s._v("\nO(1) < O(logn) < O(n) < O(nlogn) < O(n"),a("sup",[s._v("2")]),s._v(") < O(n"),a("sup",[s._v("3")]),s._v(") < O(2"),a("sup",[s._v("n")]),s._v(") < O(n!) < O(n"),a("sup",[s._v("n")]),s._v(")")]),s._v(" "),a("h2",{attrs:{id:"最坏情况与平均情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最坏情况与平均情况"}},[s._v("#")]),s._v(" 最坏情况与平均情况")]),s._v(" "),a("p",[s._v("我们查找一个有n个随机数字数组中的某个数字，最好的情况是第一个数字就是，那么算法的时间复杂度为O(1)，但也有可能这个数字就在最后一个位置，那么时间复杂度为O(n)。\n平均运行时间是期望的运行时间。\n最坏运行时间是一种保证。在应用中，这是一种最重要的需求，"),a("strong",[s._v("通常除非特别指定，我们提到的运行时间都是最坏情况的运行时间")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"算法的空间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法的空间复杂度"}},[s._v("#")]),s._v(" 算法的空间复杂度")]),s._v(" "),a("p",[s._v("我们在写代码时，完全可以用空间来换去时间。")]),s._v(" "),a("p",[s._v("举个例子说，要判断某年是不是闰年，你可能会花一点心思来写一个算法，每给一个年份，就可以通过这个算法计算得到是否闰年的结果。")]),s._v(" "),a("p",[s._v("另外一种方法是，事先建立一个有2050个元素的数组，然后把所有的年份按下标的数字对应，如果是闰年，则此数组元素的值是1，如果不是元素的值则为0。这样，所谓的判断某一年是否为闰年就变成了查找这个数组某一个元素的值的问题。")]),s._v(" "),a("p",[s._v("第一种方法相比起第二种来说很明显非常节省空间，但每一次查询都需要经过一系列的计算才能知道是否为闰年。第二种方法虽然需要在内存里存储2050个元素的数组，但是每次查询只需要一次索引判断即可。")]),s._v(" "),a("p",[s._v("这就是通过一笔空间上的开销来换取计算时间开销的小技巧。到底哪一种方法好？其实还是要看你用在什么地方。")]),s._v(" "),a("blockquote",[a("p",[s._v("定义：算法的空间复杂度通过计算算法所需的存储空间实现，算法的空间复杂度的计算公式记作：S(n)=O(f(n))，其中，n为问题的规模，f(n)为语句关于n所占存储空间的函数。")])]),s._v(" "),a("p",[s._v("通常，我们都是用“时间复杂度”来指运行时间的需求，是用“空间复杂度”指空间需求。\n当直接要让我们求“复杂度”时，通常指的是时间复杂度。\n显然对时间复杂度的追求更是属于算法的潮流！")])])}),[],!1,null,null,null);t.default=r.exports}}]);