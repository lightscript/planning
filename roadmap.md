
# Roadmap

## Language Features

Done(ish):
1. const
1. for-from
1. paren-free if/for
1. comprehensions
1. ~
1. word operators (is, isnt, or, and, not)
1. array.0.access
1. whitespace & implicit returns
1. commaless arrays/objects
1. -/>, =/>, etc
1. bound methods
1. ternaries

Do first:
1. <-, <?-
1. ^pin
1. stdlib
1. for-own
1. safe accessor &.
1. remove bitwise operators

Decide:
1. require leading zero in decimal literals
1. tcomb
1. match
1. immutability / freeze operator
1. ~~
1. "inter{pol}ation"
1. obj.`str${i}ng`.access
1. print
1. no-arg bangcall!
1. bangcall! with whitespace
1. slices
1. destructured prop transfer
1. multiline string/regex

Not for first version:
1. let, mut in args
1. pure-read, pure-write
1. word lists
1. it-lambda's

I think not:
1. `js escape hatch`


## Tooling etc.

We will need to build:
- compiler
- standard library
- syntax highlighting
- example repos
- public documentation website
- linter (eslint + flow + custom)
- awesome error messages
- intellisense (aka flow interop)
- js2lightscript
- coffee2lightscript
- typescript2lightscript
