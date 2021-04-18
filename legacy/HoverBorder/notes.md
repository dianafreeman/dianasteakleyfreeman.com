
# When alwaysShow is true:

multicolored when hovered,
gray when not hovered

----

# When alwaysShow is false

multicolored when hovered,
transparent when not hovered


## old snippets


- Former Styled Pseudoelement with double border:
```
 ${props => props.double &&  `&::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    left: 0;
    height: 1px;
    background: ${GRAY};
   }`}

```

```
    background: ${HARD_GRADIENT};
```
