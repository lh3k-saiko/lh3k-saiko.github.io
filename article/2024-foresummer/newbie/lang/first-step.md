---
title: 一小步，一大步
publishDate: 2024-02-04
description: 学习编程的第一步
---

# 一小步，一大步

## 写在前面

虽然在网上已经由很多 C++/Java/Python 教程，况且学校也开设有 C/C++ 课程，重新写一篇教程显得有点呆。不过想来想去觉得还是有写的必要。首先，市面上的教程质量良莠不齐，且大都针对的是一般开发者。这些教程往往花大量篇幅去讲授诸如面向对象、模板推导以及异常处理之类工程语法，而一些 XCPC 中很重要的知识，如如何使用一些常见的 STL，却往往一笔略过。学校的课就更不必说，姑且不提课程质量，教学目标完全达不到 XCPC 所需的基本要求。——不过虽然口嗨这么多，自己写的可能还没这些好，做好心理准备吧——我的意思是，不起误导作用就算成功。

> 目前为止，接下来的所有内容都是 C++ 教程。不过未来会加入 Java 和 Python 吗？天知道。

### 开发环境

> 想要开箱即用的体验？WebIDE 是个不错的选择。虽然长期来看 WebIDE 不是一个好的选择，但是对于新人来说肯定上手最快的方法——毕竟安装 C++ 的开发环境有时是相当痛苦的，尤其是对于非 *nix 用户而言。
>
> - [C++ Shell](https://cpp.sh/): 一键编译运行 C++，这个网站会将你的代码送到服务器编译为 Wasm，并将编译结果返回至浏览器运行。优点在于可以调整一些常见的编译参数，并且代码在浏览器中运行，可以进行一些交互操作。缺点在于运行的是 Wasm，性能不及原生机器码，运行时间仅作参考。
> - OJ 上的 Custom Test（如 [洛谷](https://www.luogu.com.cn/ide) 和 [Codeforces](https://codeforces.com/problemset/customtest)）: 在线 IDE，可以上传源代码的同时提供输入数据，在服务器端完成编译和运行的操作，只返回运行结果。优点在于可以快速测试代码在 OJ 上运行的情况，方便检查是否有环境不同造成的问题。缺点在于由于代码直接运行在服务器端，难以进行交互。


#### 编译器

算法竞赛中最常使用的编译器绝对要属 GCC。其他的，比如 Clang，用法和 GCC 基本相同，不再细述（不过不可认为两者完全相同）；MSVC 只能运行于 Windows 上，除了 Codeforces 我想应该没有其他支持的了。

对于 *nix（如哀家用的 NixOS）用户来说，系统中大都安装由 GCC 工具链，如果没有，也可以使用诸如

```bash
# For Debian based distributions like Ubuntu
sudo apt-get install gcc

# For RPM-based distributions like CentOS
sudo yum install gcc

# For NixOS
nix-shell -p gcc
```

的命令来下载 GCC。对于 OSX 用户，可以考虑安装 Xcode（不过使用的是 Apple Clang 而非 GCC）。

【TODO：Windows 下的开发环境的搭建】

