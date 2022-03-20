(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{533:function(t,a,_){"use strict";_.r(a);var s=_(14),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"二叉树的定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的定义"}},[t._v("#")]),t._v(" 二叉树的定义")]),t._v(" "),_("h4",{attrs:{id:"_1-什么是二叉树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是二叉树"}},[t._v("#")]),t._v(" 1. 什么是二叉树")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("二叉树")]),t._v("是由n（n>=0）个结点组成的有序集合，该集合或者为空集（称为空二叉树），或者是由一个根节点加上两棵分别称为根节点的左子树和右子树的、互不相交的二叉树组成。")])]),t._v(" "),_("p",[t._v("如下图：左边的就是一颗二叉树。而右图，因为D节点有三个子树，所以它不是二叉树。\n"),_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512211843.png",alt:""}}),t._v(" "),_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512211856.png",alt:""}})]),t._v(" "),_("h4",{attrs:{id:"_2-二叉树的特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-二叉树的特点"}},[t._v("#")]),t._v(" 2. 二叉树的特点")]),t._v(" "),_("p",[t._v("由二叉树定义以及图示分析得出二叉树有以下特点：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("每个结点最多有两颗子树")]),t._v("，所以二叉树中不存在度大于2的结点。（注意不是只有两棵子树，而是最多有，没有子树或者有一棵子树都是可以的）")]),t._v(" "),_("li",[_("strong",[t._v("左子树和右子树是有顺序的，次序不能任意颠倒")])]),t._v(" "),_("li",[_("strong",[t._v("即使树中某结点只有一棵子树，也要区分它是左子树还是右子树")])])]),t._v(" "),_("p",[t._v("二叉树具有五种基本形态，即：空二叉树、只有一个根结点、根结点只有左子树、根结点只有右子树、根结点既有左子树又有右子树：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512211912.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"特殊二叉树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特殊二叉树"}},[t._v("#")]),t._v(" 特殊二叉树")]),t._v(" "),_("h4",{attrs:{id:"_1-斜树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-斜树"}},[t._v("#")]),t._v(" 1. 斜树")]),t._v(" "),_("p",[t._v("顾名思义，斜树一定要是斜的，但是往哪斜还是有讲究。"),_("strong",[t._v("所有的结点都只有左子树的二叉树叫左斜树。所有结点都是只有右子树的二叉树叫右斜树")]),t._v("。"),_("strong",[t._v("这两者统称为斜树")]),t._v("。下图中左图就是左斜树，右图为右斜树。斜树有很明显的特点，就是每一层都只有一个结点，结点的个数与二叉树的深度相同。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512211933.png",alt:""}}),_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512211948.png",alt:""}})]),t._v(" "),_("p",[t._v("有人会想，这也能叫树呀，与我们的线性表结构不是一样吗。对的，其实线性表结构就可以理解为是树的一种极其特殊的表现形式。")]),t._v(" "),_("h4",{attrs:{id:"_2-满二叉树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-满二叉树"}},[t._v("#")]),t._v(" 2. 满二叉树")]),t._v(" "),_("p",[_("strong",[t._v("在一棵二叉树中，如果所有分支结点都存在左子树和右子树，并且所有叶子都在同一层上，这样的二叉树称为满二叉树")]),t._v("。")]),t._v(" "),_("p",[t._v("下图就是一颗满二叉树：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512212036.png",alt:""}})]),t._v(" "),_("p",[t._v("单是每个结点都存在左右子树，不能算是满二叉树，还必须要所有的叶子都在同一层上，这就做到了整棵树的平衡。因此，满二叉树的特点有：")]),t._v(" "),_("ul",[_("li",[t._v("叶子只能出现在最下一层。出现在其他层就不可能达成平衡。")]),t._v(" "),_("li",[t._v("非叶子结点的度一定是2。")]),t._v(" "),_("li",[t._v("在同样深度的二叉树中，满二叉树的结点个数最多，叶子数最多")])]),t._v(" "),_("h4",{attrs:{id:"_3-完全二叉树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-完全二叉树"}},[t._v("#")]),t._v(" 3. 完全二叉树")]),t._v(" "),_("p",[_("strong",[t._v("对一棵具有n个结点的二叉树按层序编号，如果编号为i(1≤i≤n)的结点与同样深度的满二叉树中编号为i的结点在二叉树中位置完全相同，则这棵二叉树称为完全二叉树。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512212057.png",alt:""}})]),t._v(" "),_("p",[t._v("完全二叉树的具有以下特点：")]),t._v(" "),_("ul",[_("li",[t._v("叶子结点只能出现在最下两层")]),t._v(" "),_("li",[t._v("最下层的叶子一定集中在左部连续位置")]),t._v(" "),_("li",[t._v("倒数二层，若有叶子结点，一定都在右部连续位置")]),t._v(" "),_("li",[t._v("如果结点度为1,则该结点只有左孩子，即不存在只有右子树的情况")]),t._v(" "),_("li",[t._v("同样结点数的二叉树，完全二叉树的深度最小")])]),t._v(" "),_("p",[t._v("判断某二叉树是否是完全二叉树的办法，那就是看着树的示意图，心中默默给每个结点按照满二叉树的结构逐层顺序编号，如果编号出现空档，就说明不是完全二叉树，否则就是。")]),t._v(" "),_("h2",{attrs:{id:"二叉树的性质"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的性质"}},[t._v("#")]),t._v(" 二叉树的性质")]),t._v(" "),_("p",[_("strong",[t._v("性质1")]),t._v(":在二叉树的第i层上至多有2^(i-1)个结点（i≥1）。")]),t._v(" "),_("p",[t._v("这个性质很容易理解，二叉树中每层结点数最多的树是满二叉树，观察满二叉树每层的结点数很容易得出这个结论。")]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("性质2")]),t._v("：深度为k的二叉树至多有 2^k -1个结点(k≥1)。")]),t._v(" "),_("p",[t._v("这个性质也很容易理解，相同深度的二叉树中结点数最多的是满二叉树，观察满二叉树不同深度下的节点个数很容易得出这个结论。")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("性质2：对任何一棵二叉树，如果其叶结点有n个，度为2的非叶子结点有m个，则 n = m + 1。")]),t._v(" "),_("p",[t._v("如下图，结点总数为10，它是由A、B、C、D等度为2结点，F、G、H、I、J等度为0的叶子结点和E这个度为1的结点组成。总和为4+1+5=10。n=5，m=4，满足n = m + 1。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512212115.png",alt:""}})]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("性质4")]),t._v("：具有n个结点的"),_("strong",[t._v("完全二叉树")]),t._v("的高度为log2n + 1。")]),t._v(" "),_("p",[t._v("这个公式怎么来的就不细说了，有兴趣可以自己推导一下。")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("性质5：对于有n个结点的完全二叉树，按层次对结点进行编号（从上到下，从左到右），对于任意编号为i的结点：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512212133.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"二叉树的存储结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的存储结构"}},[t._v("#")]),t._v(" 二叉树的存储结构")]),t._v(" "),_("h4",{attrs:{id:"_1-二叉树顺序存储结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-二叉树顺序存储结构"}},[t._v("#")]),t._v(" 1. 二叉树顺序存储结构")]),t._v(" "),_("p",[t._v("二叉树的顺序存储结构就是用一维数组存储二叉树中的结点，并且结点的存储位置，也就是数组的下标要能体现结点之间的逻辑关系，比如双亲与孩子的关系，左右\n兄弟的关系等。")]),t._v(" "),_("p",[t._v("先来看看完全二叉树的顺序存储，一棵完全二叉树如图所示。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512212144.png",alt:""}})]),t._v(" "),_("p",[t._v("将这棵二叉树存入到数组中，相应的下标对应其同样的位置，如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512212159.png",alt:""}})]),t._v(" "),_("p",[t._v("由图可以看出，当二叉树为完全二叉树时，结点数刚好填满数组。\n那么当二叉树不为完全二叉树时，采用顺序存储形式如何呢？例如：对于下图描述的二叉树：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512212212.png",alt:""}})]),t._v(" "),_("p",[t._v("其中浅色结点表示结点不存在。那么上图所示的二叉树的顺序存储结构如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512212226.png",alt:""}})]),t._v(" "),_("p",[t._v("其中，∧表示数组中此位置没有存储结点。此时可以发现，顺序存储结构中已经出现了空间浪费的情况。")]),t._v(" "),_("p",[t._v("我们再考虑下右斜树这种极端情况，采用顺序存储的方式显然是十分浪费空间的。因此，"),_("strong",[t._v("顺序存储一般适用于完全二叉树")]),t._v("。")]),t._v(" "),_("h4",{attrs:{id:"_2-二叉链表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-二叉链表"}},[t._v("#")]),t._v(" 2. 二叉链表")]),t._v(" "),_("p",[t._v("既然顺序存储适用性不强，我们就要考虑链式存储结构，"),_("strong",[t._v("二叉树每个结点最多有两个孩子，所以为它设计一个数据域和两个指针域")]),t._v("是比较自然的想法，我们称这样的链表叫做"),_("strong",[t._v("二叉链表")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512212239.png",alt:""}})]),t._v(" "),_("p",[t._v("上面提到的完全二叉树可以用下图表示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/datastructure/20200512212256.png",alt:""}})]),t._v(" "),_("p",[t._v("就如同树的存储结构中讨论的一样，如果有需要，还可以再増加一个指向其双亲的指针域，那样就称之为三叉链表。由于与树的存储结构类似，这里就不详述了。")])])}),[],!1,null,null,null);a.default=v.exports}}]);