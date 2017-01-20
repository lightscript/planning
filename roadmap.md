
# Roadmap

## Marketing

- blog posts
  - babylon: how to add an operator
  - babylon: how to get set up creating a language
  - babylon: how to add a statement
  - babylon: how to futz with assignments
  - babylon: how to futz with chaining/subscripts
  - babel: how to define your own types
  - babel: how to make implicit let/const
  - babel: the photon call
- unrelated, ship PR for defineType
- javascript jabber
  - listen to the typescript one
  - try to get on it
- other podcasts

## Tooling

- usage
  - CLI
  - webpack
  - register
- editor integration
  - syntax
  - unified linter
    - compiler errors
    - flow
    - eslint
- make flow work
- define good code
  - fork prettier, update all the things
  - eslint integration, rules
- installation

## Docs

- ASI
- JS incompatibilities
- Compile into website
- Paren-free/curly
- implicit returns
- whitespace rules
-

## Language Features

Done(ish):
1. const
1. for-from
1. paren-free if/for
1. comprehensions
1. ~
1. operators (==, !=, or, and, not)
1. array.0.access
1. whitespace & implicit returns
1. commaless arrays/objects
1. -/>, =/>, etc
1. bound methods
1. ternaries
1. <-, <!-

Do first:
1. existentialism (`?`, `??`, `?.`, `?()`, `?=`)
1. ^pin
1. for-own
1. for-in-val (for k, v in obj)
1. object comprehensions
1. stdlib
  - coercingEq(), coercingNotEq()
  - bitwiseAnd() etc
  - lodash
  - tcomb (?)
1. remove bitwise operators

Hopefully next:
1. bangcall no-args
1. bangcall multiline
1. tcomb
1. ~~
1. match
1. refinements
1. destructured prop transfer

Decide:
1. multiline string/regex
1. require leading zero in decimal literals
1. immutability / freeze operator
1. "inter{pol}ation"
1. obj.`str${i}ng`.access
1. print
1. no-arg bangcall!
1. bangcall! with whitespace
1. slices

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
