---
title: Baby Step
publishDate: 2024-02-04
description: 学习编程的第一步
---

# Baby Step

## 写在前面

虽然在网上已经由很多 C++/Java/Python 教程，况且学校也开设有 C/C++ 课程，重新写一篇教程显得有点呆。不过想来想去觉得还是有写的必要。首先，市面上的教程质量良莠不齐，且大都针对的是一般开发者。这些教程往往花大量篇幅去讲授诸如面向对象、模板推导以及异常处理之类工程语法，而一些 XCPC 中很重要的知识，如如何使用一些常见的 STL，却往往一笔略过。学校的课就更不必说，姑且不提课程质量，教学目标完全达不到 XCPC 所需的基本要求。——不过虽然口嗨这么多，自己写的可能还没这些好，做好心理准备吧——我的意思是，不起误导作用就算成功。

> 目前为止，接下来的所有内容都是 C++ 教程。不过未来会加入 Java 和 Python 吗？天知道。

### 开发环境

> 想要开箱即用的体验？WebIDE 是个不错的选择。虽然长期来看 WebIDE 不是一个好的选择，但是对于新人来说肯定是上手最快的方法——毕竟安装 C++ 的开发环境有时是相当痛苦的，尤其是对于 Windows 用户而言。
>
> - [C++ Shell](https://cpp.sh/): 一键编译运行 C++，这个网站会将你的代码送到服务器编译为 Wasm，并将编译结果返回至浏览器运行。优点在于可以调整一些常见的编译参数，并且代码在浏览器中运行，可以进行一些交互操作。缺点在于运行的是 Wasm，性能不及原生机器码，运行时间仅作参考。
> - OJ 上的 Custom Test（如 [洛谷](https://www.luogu.com.cn/ide) 和 [Codeforces](https://codeforces.com/problemset/customtest)）: 可以上传源代码的同时提供输入数据，在服务器端完成编译和运行的操作，只返回运行结果。优点在于可以快速测试代码在 OJ 上运行的情况，方便检查是否有环境不同造成的问题。缺点在于由于代码直接运行在服务器端，难以进行交互。

#### 编译器

算法竞赛中最常使用的编译器绝对要属 GCC。其他的，比如 Clang，用法和 GCC 基本相同，不再细述（不过不可认为两者完全相同）；MSVC 只能运行于 Windows 上，除了 Codeforces 我想应该没有其他支持的了。

对于 *nix（如哀家用的 NixOS）用户来说，系统中大都安装有 GCC 工具链，如果没有，也可以使用诸如

```bash
# For Debian based distributions like Ubuntu
sudo apt-get install gcc

# For RPM-based distributions like CentOS
sudo yum install gcc

# For NixOS
nix-shell -p gcc
```

的命令来下载 GCC。

对于 OSX 用户，可以考虑安装 Xcode（不过使用的是 Apple Clang 而非 GCC），或者[参考这篇教程](https://discussions.apple.com/thread/8336714?sortBy=best)。

【TODO：Windows 下的如何安装 GCC 工具链】

【TODO：gcc 的常见用法】

#### 文本编辑器/开发环境

如果一个人在使用记事本（Notepad）写代码，那么一般而言以下列举的情况中至少一项成立：

1. 这个人是外行；
2. 提供这台机器的人有病，比如**比赛的主办方**；（还真发生过，我不说是哪次）
3. 这个人在整蛊，或者在尝试误导新手/外行。

但是如果一个人在使用 Microsoft Word 写代码，那么我有十分甚至九分的把握认为以下列举的情况中至少一项成立：

1. 这个人脑子有病。

确实理论上只需提供类似记事本或者 vi 这样的软件就可以写出绝大多数语言的代码<span class="text-xs">（Smalltalk 除外，就我目前认知而言，你也不用知道为什么）</span>。然而写代码是一件相当繁琐且容易出错的工作，一两个字符的扰动就足以使得整个程序的行为大幅改变。因此一些辅助手段就显得很有必要，比如最常见的，**语法高亮**。而一个先进的文本编辑器或者集成开发环境（IDE）可以帮你解决这些问题。两者间并没有严格的界限。硬要说的话，文本编辑器只是在记事本的基础上加上了语法高亮、内容搜索及一键替换等功能，而代码的编译、运行及调试则需要另行配置或者安装插件；而 IDE 则将这些功能全部集中于一身，且往往针对某一特定语言设计，一般而言无需过多配置即可使用。

[OI wiki](https://oi-wiki.org/tools/) 上有一份还算详细的各种代码编辑工具的介绍。不过在选一款适合自己的之前，还是有几点需要注意。

1. **注意软件的兼容性和平台支持**。正式比赛场上提供的操作系统大都是基于 GNU/Linux 的，如 Ubuntu。<span class="text-xs">（至于桌面环境，就我目前所知似乎都是 Gnome，至于其他的如 KDE 或者 Xfce 之类的是否也有提供，这得看主办方的心情，还是喜好？）</span> 而 Dev-C++ 和 Visual Studio 只能在 Windows 上运行，更别提 macOS 专属的 Xcode。

2. **记住我们打是 XCPC 的，不是搞什么项目当码农的**。在我们遇到的绝绝绝大多数题目都只需要提交单份代码（文本或者单个文件的形式），像 Visual Studio（注意，不是 Visual Studio Code）和 Xcode 这样的 IDE，不但由于自身体量导致启动需要花费大量时间，而且**每新写一份代码就要新建一个项目**——这对于罚时精确到分钟的 XCPC 及其衍生赛制中是不能容忍的。

3. **注意学习曲线**。对于文本编辑器，如 Vim、Emacs 和 Visual Studio Code，对于初学者来说可能需要花费不少时间和精力来熟悉和琢磨。

4. **注意软件的支持**。虽然绝大多数情况下你不需要关心你的编辑器/开发环境是否该更新了，不过如 [Atom 就已经被官方所放弃](https://github.blog/2022-06-08-sunsetting-atom/)（一个好主意是改用其社区维护的后继者 [Pulsar](https://pulsar-edit.dev/)）。Dev-Cpp 的支持更是混乱，有若干种官方版本和民间版本。有些 Dev-C++ 的版本有严重的漏洞（如“吞代码”），但是这些漏洞可能再也不会有人去修复了。 

> 虽然不推荐这款 IDE，但是如果你想要深入 XCPC，你可能需要学习如何使用 Dev-C++，可能的原因包括但不限于
>
> 1. 这可能是某些比赛场景下**最好用的编辑器**；
> 2. 你可能会遇到一个『只会用低衣微写代码』的队友；
> 3. 没有人不会喜欢 F11 一键运行的，我说的对吧？