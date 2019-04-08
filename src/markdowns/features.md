### Code Block

```javascript
export default function codeFense (h, cursor, block, token, outerClass) {
  const { start, end } = token.range
  const { marker } = token

  const markerContent = this.highlight(h, block, start, start + marker.length, token)
  const content = this.highlight(h, block, start + marker.length, end, token)

  return [
    h(`span.${CLASS_OR_ID['AG_GRAY']}`, markerContent),
    h(`span.${CLASS_OR_ID['AG_LANGUAGE']}`, content)
  ]
}
```

#### Table Block

| **支出项目**        | **金额** |
| --------------- |:------:|
| 住房（租金，房贷，税费，保险） | ¥5,500 |
| 杂货              | ¥1,500 |
| 交通              | ¥500   |
| 水电煤气费           | ¥1,500 |
| 饮食，旅游，娱乐        | ¥2,500 |

#### Inline Formats

**Mark Text** support all  [CommonMark Spec](https://spec.commonmark.org/0.28/)  and  [GitHub Flavored Markdown Spec](https://github.github.com/gfm/) syntax.

**strong**, *emphasis*, `inline code`, $a \ne b$, ~~strike~~, [link](), ![picture](pap.er/3Jpk-_asav0.jpg)

#### Emoji

:older_woman: :earth_americas: :he:

#### Math Formula

$$
f(n)
\begin{cases}
\cfrac n2, &if\ n\ is\ even\\
3n + 1, &if\  n\ is\ odd
\end{cases}
$$
