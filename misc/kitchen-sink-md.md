---
title: Kitchen Sink
description: Testing the style of Markdown
publishDate: 2024-01-15
---

# Kitchen Sink of Markdown #

# H1 #

## H2 ##

### H3 ###

#### H4 ####

##### H5 #####

###### H6 ######

This is a paragraph. [To this](/misc/kitchen-sink-md/)

$$
  x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

_em_, __bold__, **_em and bold_**, ~~removed~~.

| Left | Center | Right |
|:-----|:------:|------:|
| aaaa | aaaaaa | aaaaa |

![](/static/background.jpg)

> Blockquote
> 
> Blokcquote
> > Nested Blockquote
> > Nested Blockquote
>
> YES
> 
> NO

### C

```c
#include <stdio.h>

typedef long long i64;

typedef struct {
    double x;
    double y;
} vector2;

int main(void) {
    printf("Hello World\n");
    return 0;
}
```

### C++

```cpp
#include <iostream>

using i64 = long long;

class vector2 {
    double x;
    double y;
    vector2(double x, double y): x(x), y(y) {}
};

int main(void) {
    std::cout << "Hello World" << std::endl;
    return 0;
}
```

### Python

```python
if __name__ == "__main__":
    print("Hello %s" % "World")
```

### Rust

```rust
fn main() {
    let world = "World";
    println!("Hello {}", world)
}
```

### JS

```js
!function main() {
    const world = "World";
    console.log(`Hello ${world}`);
}()
```