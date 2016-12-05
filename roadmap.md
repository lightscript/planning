
# Roadmap

## Language Features

Done(ish):
1. const
1. for-from
1. paren-free if/for
1. comprehensions
1. ~
1. word operators (is, isnt, or, and, not)

Seem easier, do first:
1. ^pin
1. for-own
1. safe accessor &.
1. remove bitwise operators
1. stdlib
1. no-arg bangcall!
1. <-
1. <?-
1. constructor auto-binding
1. ternaries
1. ~~
1. multiline string/regex
1. =/>
1. bound methods

Decide:
1. tcomb
1. match
1. `js escape hatch`
1. "inter{pol}ation"
1. print

Trickier/later:
- commaless arrays
- commaless objects
- destructured prop transfer
- slices
- array.0.access
- obj."str{i}ng".access

Elephant in the room:
- whitespace & implicit returns

Not for first version:
- let, mut in args
- pure-read, pure-write
- word lists
- it-lambda's


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
