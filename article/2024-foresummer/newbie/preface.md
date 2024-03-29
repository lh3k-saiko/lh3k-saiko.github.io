---
title: Preface
description: 小白专题 - 前言
publishDate: 2024-02-01
---

# 小白专题 - 前言

## 一切的开始

首先，无论你来自何方，无论你抱着什么样的目的，无论你目前学业水平与评价如何，无论接下来的内容会怎样影响你之后的抉择，欢迎你来到 UESTC_XCPC。这里 2024 年 UESTC_XCPC 暑假前集训的第一个专题——小白专题。与其他专题不同，本专题专门为刚刚进入算法与程序设计竞赛的萌萌哒准备。也就是说，你无需任何高中的 OI 经历，也不需要所在学院开设程序设计和数据结构课程（实际上我们也并不推荐这些课程）。你只需要拥有最基础的数理知识和能够考入本校的英语水平<del>（其他外语的抱歉</del>，就可以通过本次专题快速入门算法与程序设计竞赛。

在阅读以下部分前，你或许可以先看看：

- [打 XCPC 有什么好处](/article/2024-foresummer/newbie/pros-of-xcpc/): 整活向的 XCPC 介绍。

## 语言基础

在 XCPC 系列赛事中，可以使用的语言有 C、C++、Python 和 Java（除此之外还有一门 Kotlin 也是 ICPC 官方认可的语言，但是国内比赛基本不支持）。这四门语言各有优劣，在不同的场景中不同的应用。而在 XCPC 程序设计竞赛中最常用的是 C++，原因有

1. C++ 是编译型语言，执行效率高于作为解释型语言的 Python 和编译产物为字节码的 Java；
2. 若仅程序设计竞赛的范围内，C++ 可以看作 C 的超集，而 C++ 拥有 STL 和更多的语法糖，相较 C 语言能够更快地实现一些复杂的算法。

因此，在绝大多数情况下，学会 C++ 一门语言就可以应付近乎所有 XCPC 中的问题，小白专题中的语言基础部分绝大多数也都是 C++ 相关的。但在某些场合下，其他语言也有其优势。比如说，Python 和 Java 提供了高精度运算的支持，但是 C 和 C++ 并没有，在赛场上只能手写。学有余力的读者也可以尝试自学这些语言，这里便不再展开。

```cpp
#include <iostream>

int main(void) {
    std::cout << "Welcome to UESTC_XCPC" << std::endl;
    return 0;
}
```

### 如何学习 C++（学习路线和一些资料）

C++ 是一门复杂的语言。抛开冗杂的 STL 和面向对象不说，光是语法 C++ 便能吓跑一批新人。不过，幸运的是，对于参加 XCPC 的人来说绝大多数语法都是非必须的，包括像是继承自 C 语言的指针、令人迷惑的多继承以及复杂的模板推导。其实你只需要学会 C99，再学习一些 C++ 中常用的 STL 函数和容器便足以应付 XCPC 中的绝大多数情况。少数的需要使用到一些高级语法的例子也会在之后有专门的文章进行介绍。

对于零基础来说，需要学习的大概有这些：

1. 程序结构与基础语法；
2. 数据类型和运算（包括位运算）；
3. 顺序结构、选择结构和循环结构；
4. 数组（一维和高维）和指针（可能比较难，可以放后面一些学习）；
5. 结构体与类（类的一些高级用法，如重载运算符，可以放后面一些）；
6. 函数、函数指针与 lambda 表达式；
7. 一些常见的 STL 函数与容器（涉及到少量 C++ 的模板）。

学习 C++ 的教程和资料有很多，随便百度、必应或者谷歌一下还是能找到很多教程。这里罗列其中一些。

首先是一些看过的且觉得还行的。

- [cplusplus.com](https://cplusplus.com/doc/): IOI 官网推荐，一个 C++ 的简单入门级教程，全英文，有详细的讲解和介绍，且所有实例代码都可以在浏览器中直接运行。不足之处在于教程对于 STL 和一些进阶语法介绍地比较少（尽管这一网站中有相关的详细介绍，但并不在教程中）。但是如果只是拿来上手的话还是不错的。（推荐阅读面向对象之前的部分）

- [LearnCpp](https://www.learncpp.com/): IOI 官网推荐，一个公益性的 C++ 教程网站，里面有对 C++ 语法的较为详细的介绍，解释得比较清晰，对于初学者来说比较友好。并且这一网站自 C++98 的时代一直维护到了现在，目前也还在不断更新，加入关于 C++ 新标准的介绍和教程。不过这一教程是针对一般 C++ 开发者的，教程的侧重点和打 XCPC 所需要的 C++ 相差比较大，如果你学习 C++ 只是为了打 XCPC 的话，建议选择性阅读。（尤其是教程中推荐的 Visual Studio（注意，不是 Visual Studio Code）在 XCPC 中是**极度不推荐**的）

- [OI wiki](https://oi-wiki.org/lang/): 算法竞赛的 wiki，里面也包含了一个 C++、Python 和 Java 语言的介绍。优点在于范围基本囊括所有 XCPC 需要的语法知识（包括一些常用的 STL）。缺点在于 OI wiki 中一些文章写得过于详细，有些内容更像是参考，导致实际上内容对于初学者并不友好。建议在有一定语言基础后再回来阅读加深印象。

看过但不推荐的。

- [Runoob](https://www.runoob.com/cplusplus/cpp-tutorial.html): 菜鸟教程上的 C++ 教程。据其宣称这一教程“是专门为初学者打造的”。不过和 OI-wiki 一样，写得过于详细，且缺少必要的解释，让人摸不着重点，且内容感觉很过时，故而不推荐。

- [W3schools](https://www.w3schools.com/cpp/default.asp) 以及 [国内版(?)](https://www.w3schools.cn/cpp/default.html): 著名的 W3schools 上的 C++ 教程。和 Runoob 相反，这个教程的内容又显得有些过于简单，每小节结束还会附带一些小～检～测～。总而言之不推荐。

除此以外还有一些百科式的参考网站。

- [C++ reference](https://en.cppreference.com/w/): 一个 C 和 C++ 语言的参考网站，里面有对各个标准 C++ 的语法、STL 以及编译器支持的详细介绍。如果平时写代码时有语法疑惑或者 STL 忘记了用法，查阅这个网站一般而言要比去 [stackoverflow](https://stackoverflow.com/) 更快。

- [cplusplus.com](https://cplusplus.com/reference/): 没错还是 cplusplus.com，这个网站上也有一个 C++ 标准库的参考，不过相较前者而言稍逊一筹。

## 基础算法

在学习 C++ 的同时，你也可以尝试开始刷一些比较简单的算法题了。以下的一些算法并不需要你完整地掌握 C++，你也可以将在学习 C++ 的知识点后将下面举出的例题用于检测。

### 选择、循环与迭代

面向过程编程语言绕不开的三种结构：顺序结构、选择结构和循环结构。掌握这三种结构，你便拥有了独立设计算法的基础。

- （快点催我去拉题）

### 简单模拟

学会了一门编程语言就可以自己做一门游戏了<del>（bushi</del>

- （快点催我去拉题）

### 递归和基础搜索

递归是一种相当重要的思想，在许多的数学推导和算法设计中均能看到递归的影子。其核心思想在于将求解一个复杂的问题转化为一个相同但规模更小的问题，如此往复直到规模小到答案变得显然。在之后的数据结构和动态规划专题中还会大量地看到递归的影子。

搜索大体可分为两类：深度优先搜索（DFS）和广度优先搜索（BFS）。深搜主要采用递归栈的方式实现，而广搜主要采用队列来实现。搜索是之后图论专题中几乎所有算法的基础，也是求解一些困难问题的比较简单且通行的思路。~~尽管搜索这一知识点在近年来的考察频率在逐渐下降，但是搜索算法其依然是各省 NOIp/CSP 选手获取分数的主要来源之一~~

- （快点催我去拉题）

### 贪心

> 贪心只能过样例

贪心一般被用于求解最优策略的算法中，给人最直观的感受就是正确性不直观、依赖于数学证明。一般而言，贪心**大体**可分为以下两种：

1. 减小求解范围。如从 $n$ 个数中挑出 $k$ 个，使其和最大，显然，我们不需要遍历所有 $\binom nk$ 种情况，只需找出其中前 $k$ 大的数相加即是答案。
2. 扩大求解范围。如常见的将 $\max\lbrace|a-b|,|c-d|\rbrace$ 转化为 $\max\lbrace a-b,b-a,c-d,d-c\rbrace$，以扩大求解范围为代价去掉了表达式中的绝对值，前者带来的影响往往是常数级别的，但是消去绝对值往往意味着能够设计出时间复杂度更加优秀的算法。

市面上的贪心讲解往往局限于『局部最优性』这一定义，但是实际上很多贪心算法并不需要局部最优性，甚至不需要使得过程答案的决策绝对最优，如比较常见的带悔贪心。设计贪心算法的难点往往在于数学证明，一些数学证明很简单（尝试证明上面挑选前 $k$ 大数的最优性？），一些则需要具备一定的数理基础，如拟阵。证明的形式多样，有微扰法、交换法、数学归纳法、循环不变性等等，但通用的套路很少。值得一提的是，在图论专题中的 Dijkstra 算法，最小生成树算法，以及一些二分图网络流算法，都或多或少用到了贪心的思想。

- （快点催我去拉题）

### 二分/三分/倍增

二分可以用于求解如下抽象问题。

> 给出 $f(x)$ 满足
> 
> 1. 值域为 $\lbrace0,1\rbrace$；
> 2. 若 $f(x_0)=0$，则对于任意函数定义域内的 $x\le x_0$，有 $f(x)=0$。（等价于“若 $f(x_0)=1$，则对于任意函数定义域内的 $x\ge x_0$，有 $f(x)=1$”）
> 
> 求 $\max\lbrace x\ |\ f(x)=0\rbrace$ 或 $\min\lbrace x\ |\ f(x)=1\rbrace$。

二分的用途有很多，最简单的例子便是 `lower_bound`——找出一个有序数列中大于等于一个给定值的最小的数（下面代码中 `l` 和 `r` 是一个 `int` 数组的两端，**左闭右开**）。

```cpp
int *my_lower_bound(int *l, int *r, int val) {
    while(l < r) {
        int *mid = l + (r - l) / 2;
        if(*mid >= val) r = mid;
        else            l = mid + 1;
    }
    return l;
}
```

又比如，求解一个连续函数在一个区间内的变号零点（需保证这个区间内只有这一个零点）。

```cpp
#include <functional> // >= C++11

double binary_search(double l, double r,
    std::functional<double(double)> f) {
    constexpr double eps = 1.0e-9;
    double L = f(l); if(L == 0.0) return L;
    while(r - l > eps) {
        double mid = (l + r) / 2.0;
        if(L * f(mid) >= 0.0) l = mid;
        else                  r = mid;
    }
    return l;
}
```

除此以外，某些问题的答案如果满足“可二分性”（通俗地来讲，就是如果 $x_0$ 可行，则大于/小于 $x_0$ 的所有情况也可行），那么就可以通过二分答案将最优化问题转化为可行性问题。出于篇幅考虑，这里就不再举出具体例子。不过这一套路在之后还会多次遇到。

- （快点催我去拉题）

三分的使用范围相较于二分要小得多，其最主要的用途在于求单峰函数的最值。（注意，是严格单峰，不能存在任何长度大于零的区间内函数值相等）离散域上的三分用得不多，且细节繁琐，稍有不慎就会进入死循环。其主要应用场景还是在连续域上，在之后的计算几何章节还会反复用到这一求最值的思想。下面是一个求上凸函数最大值点的算法，以供参考。

```cpp
#include <functional> // >= C++11

double ternary_search(double l, double r,
    std::functional<double(double)> f) {
    constexpr double eps = 1.0e-9;
    while(r - l > eps) {
        double x1 = (l + l + r) / 3.0, x2 = (l + r + r) / 3.0;
        if(f(x1) >= f(x2)) l = x1;
        else               r = x2;
    }
    return l;
}
```

- （快点催我去拉题）

### 前缀和与差分

> 给出一个长为 $n$ 数组 $a=<a_1, a_2, \dots, a_n>$，则有
>
> 1. 前缀和 $s$：$s_i=\sum\limits_{k=1}^ia_i$。
> 2. 差分 $d$：$d_i=a_i-a_{i-1}$。（不妨令 $a_0=0$）
>
> 此处的加法和减法可以换成与其拥有同样运算性质的运算，如乘法与除法，异或等。

作为区间处理和数据结构的基础，前缀和与其逆运算差分是 XCPC 选手必修的内容。如最简单的静态数组区间和就可以通过 $O(n)$ 预处理出前缀和数组然后 $O(1)$ 回答。而差分则可以将一些区间操作转化为单点操作。高维前缀和和差分相对而言考察地比较少，通常来说会出现在多项式算法和组合数问题中。此外在打表找规律时使用高阶差分也是个不错的选择。

- （快点催我去拉题）

### 双指针

双指针泛指所有使用一头一尾两个单调不减的指针扫描整个数组达到（仅就扫描过程而言）线性时间复杂度的算法。（其实现不必使用 `T*`，很多情况下只需记录首尾指针对应的数组下标。）这一算法较为灵活，通常用于与子区间有关的最优化问题和计数问题的求解中。

- （快点催我去拉题）

### 交互/通信

交互/通信题是近年来新兴的一类题目。出题方式较为灵活，且大都和构造相关；有一些常见的套路，不过不知道是好事还是坏事，套路并不多。这里放一些简单的题目，方便读者熟悉这类题目的出题方式及一些常见的交互方式。

- （快点催我去拉题）

### 综合练习

你已经学了好多算法了！快来做几道题巩固一下吧！

- （快点催我去拉题）

## 未竟之事

如果你已经基本掌握上面的知识点，恭喜你，你已经顺利地完成了小白专题。如果你对于这一阶段的学习感到很自信，我也由衷地为你感到高兴；如果你在学习的过程中遇到了困难，或者在训练时遇到了挫折，也请不要妄自菲薄。无论如何，长途漫漫，今日所学的知识，来日还会经常碰到；但时间已不再允许在此地逗留回味，之后的道路也只会倍加困难曲折。下面是我们整理的一些资料，希望能对你在 XCPC 生涯规划上有所帮助。

### 刷经验的

1. [Codeforces](https://codeforces): OI/XCPC 界最著名的网站。最初由俄国人 Михаил <a href="https://codeforces.com/profile/MikeMirzayanov" class="font-bold text-[inherit] hover:text-[inherit]">MikeMirzayanov</a> Мирзаянов 创立，而到目前已经成为一个国际性的大网站。网站上会不定时地举办一些跨时区的短时赛，含金量比较高，**我们的选拔标准中也包含这一项**，建议有时间可以多多参加。除此以外这个网站上还有很多世界各地 XCPC 比赛的真题，以及一些有价值的博客。社区也一直很活跃，提的正经问题大都有人回答。平时没事也可以来逛逛。

2. [AtCoder](https://atcoder.jp/) 与 codeforces 齐名的算竞网站，由日本人 Naohiro Takahashi 创立。其上也有很多跨时区的比赛，含金量比较高，且时间一般相较于 codeforces 更加友好（大概晚上 8:00\~10:00），**我们的选拔标准中也包含这一项**，建议有时间可以多多参加。不过 atcoder 本身并没有社区，提问之类的可以去 codeforces 或者其他网站。

3. [Luogu](https://www.luogu.com.cn/) 中学生的 OI 网站，题库很全，很多高级算法的板子和一些冷门比赛的题在上面都能找到。在其上还会不定期举行一些 IOI/乐多 赛制的个人线上赛。除此以外社区里的大牛很多，题目题解比较完善，codeforces 或者 atcoder 上不会的问题也可以拿到这里来。不过考虑到 OI 和 XCPC 赛制及考点上的差距，不建议 XCPC 选手常驻。不过拿来板刷板块或者找题的话还是很不错的。

4. [Virtual Judge](https://vjudge.net/) 一个专门代交代码的网站，好处在于应该是全网最全(?)的题库了，找题拉比赛什么的都很方便。缺点在于不是很稳定，从提交代码到爬虫爬回数据有时需要很长时间且故障率也很高。在练习或者拉一些小众网站（点名批评 HDU）的题时要关注源站是否正常评测。

5. [CodeChef](https://www.codechef.com/) 印度人的算竞网站，有点大杂烩，给人一种 LeetCode 的感觉。不过其中的一些比赛还是值得一打的。除此以外这个网站上还有一些马拉松比赛，对于很难抽出时间参加正式赛或者 VP 的人是相当友好的。

（TODO：这一部分感觉可以重新开一篇文章算了，累死我了……）

