# LightScript
## Concise, Gradually Typed EcmaScript
*less finger-typing, more static-typing*
*TypeScript with less typing"

## Goals
- approachability, ease of learning
- supporting functional, imperative, oo styles
- integration with TypeScript Tooling



### Overview
```txt
```
```js
```

### Functions
```coffee

# fat arrow – bound
myFn() => 1

# thin arrow – unbound
myFn() -> 1

# parens not needed for 0 or 1 arg w/ fat arrow
myFn = => 1
plusOne = x => x + 1

# prevent implicit returns
myFn = (): void -> 1
myFn = () -%> 1

# async functions
myFn = () -/> fetch('someUrl')

# with awaiting:
myFn = () -/>
  resp <- fetch('someUrl')
  <- resp.json()

# generators
myFn = () -*>
  yield 3
  yield 5

# getters
someObj = {
  firstName: 'Herald'
  lastName: 'Jerome'
  get name() -> "${this.firstName} ${this.lastName}"
}

# setters
someObj = {
  _height: 0
  set height(newValue) => this._height = newValue.toInches()
}

# getter+setter
# (PROBABLY NOT)
someObj = {
  firstName: 'Herald'
  lastName: 'Jerome'
  name
    get() => "{this.firstName} {this.lastName}"
    set(it) =>
      [ first, last ] = it.split(' ')
      this.firstName = first  # TODO: think of ways to destructure this
      this.lastName = first  # no implicit return in setter
}

# static methods
class MyClass
  static myStaticMethod() -> 'hello'
```

### Methods
someObj = {
  prop: "world"
  unboundMethod() ->
    "hello ${1 + 1}"
  boundMethod() =>
    "hello ${this.prop}"
  misleadingArrowProp: () => 7   # disallowed, surprising.
  asyncProp() =/> fetch(this.someUrl)

  get upcase => this._name.toUpper()
  set dog => this.dog = Dog.find(it)
  name
    get => this._name.toUpperCase()
    set => it.toLowerCase()
}

class MyClass extends AnotherClass
  constructor(@prop1, prop2) ->
    super(@prop1)
    @prop2 = prop2

  unboundMethod() -> 3 + 4
  boundMethod() => @prop1 + @prop2  # autobinds at the top of constructor
  staticMethod() -static> 7 + 8
  impossibleMethod() =static> 9 + 10  # can't have bound static method
```
```js
function thing() { return 1 }
function thing() { 1 }

const thing = () => 1

someObj = {
  unboundMethod() {
    return `hello ${1 + 1}`;
  },
  boundMethod() {
    return `hello ${this.prop}`;
  },
  propWithLambda: function () {
    return 7;
  },
  asyncProp: async function() {
    return fetch(this.someUrl)
  }
}
someObj.boundMethod = someObj.boundMethod.bind(someObj)  // probably these would want to be wrapped in an iife
someObj.asyncProp = someObj.asyncProp.bind(someObj)

class MyClass extends AnotherClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1
    this.boundMethod = this.boundMethod.bind(this)

    super(this.prop1)
    this.prop2 = prop2
  }
  unboundMethod() {
    return 3 + 4;
  }
  boundMethod() {
    return this.prop1 + this.prop2;
  }
  static staticMethod() {
    return 7 + 8;
  }
}
```

### Single-Argument Lambdas
```txt
someList.map(=> it.toUpperCase())
someList.map! => it.toUpperCase()
```
```js
someList.map(it => it.toUpperCase())
```

### Objects and Arrays
```coffee
anotherArr = [1 2 3] # commas not needed in arrays
myArr = [
  1
  2
  3
# no closing punctuation necessary

# word lists
myStrings = w[these are strings in an array]      # ['these', 'are', 'strings', 'in', 'an', 'array']
myStrings = W[these can be {1 + 1} interpolated]  # ['these', 'can', 'be', `${1 + 1}`, 'interpolated']

myObj = {
  thing: 1  # commas replaced by newlines
  myArr  # supports destructuring
  anotherArr
  anotherThing: 4
  ['hi' * 3]: 'world'  # hihihi: 'world'

anotherObj = { a: 1, b: 2 } # commas needed here?
anotherObj = { a: 1, b: 2   # closing punctuation needed one-line? I think no...

myArrOfObjs = [
  { a: 1
    b: 2
  { a: 3
    b: 4
```
```js
```

### Variables
```coffee
foo = 1  # const by default
let i = 10  # let is allowed. var is not.
```
```js
const foo = 1;
let i = 10;
```

### Booleans
```coffee
1 is 1  # ===
1 isnt 2 # !==
1 ish '1'  # ==  (or maybe `like`)
1 ishnt '2'  # !=  (or maybe `unlike`)
1 and true  # &&
false or true  # ||
not 0  # !
```
```js
```

### Conditionals
```
if false
  nope()
else if 1 === 1
  yup()

fn(): number ->
  if true: return 3  # if one-liners
  if cond: console.log('wat') and return  # UNSURE
  doSomething()

  if false
    4
  else
    7

dog = if 1: 'bark' else 'meow'
dog = if 1: 'bark' # null in else case

foo = if cond
    3
  else  # UNSURE about indentation
    4
```


### Postfix Unless

#### Conditional-Elem
```
obj = {
  a: 1
  b: 2 unless cond
}
arr = [
  4
  5
  6 unless cond
  7
  8
]
```
```js
// <UNSURE>
obj = {
  a: 1,
  b: 2,
}
if (!cond) delete obj.b
// </UNSURE>

arr = [
  4
  5
  6
  7
  8
]
if (!cond) lightscript.spliceIndices(mut arr, [6])
```

#### Conditional-Chain
```
foo
  .bar()
  ~baz() unless cond
  .fizz() unless otherCond
  .done()
```
```js
temp1 = foo.bar()
temp2 = !cond ? baz(temp1) : temp1
temp3 = !otherCond ? temp2.fizz() : temp2
temp3.done()
```



### Or-Equal
```
# idk about this, object-defaults might work at least as well...
# maybe disallow for variables? (due to const)
<UNSURE>
# null-or
thing.prop ?= 7

# falsey-or
thing.prop ||= 3
</UNSURE>
```
```js
thing.prop = thing.prop === null ? 7 : thing.prop;

thing.prop = !thing.prop ? 3 : thing.prop;
```

### Loops
```coffee
someFn(obj: {string: number}): []number ->
  for k, v of obj~entries()
    v
  # returns last value of v, not the list of v's
  # to match the `do {}` syntax of es7

for key in obj    # same as ES6
for value of obj  # same as ES6
  doSomething(value)

for own value of obj
  doSomething(value)
# for (value of obj) {
#   if (!obj.hasOwnProperty(value)) continue
#   doSomething(value)
# }

for i from x to y
  print! i

for i from x downTo y # for (var i = x; i >= y; i--)
for i from x downTill y # for (var i = x; i > y; i--)

<UNSURE>
# for one-line:
for (k, v of obj) thing()
thing() for k, v of obj
# ... I think neither allowed, for's must be two-line.
# or just use ES7 list comprehensions... oh shit, they cancelled them...
</UNSURE>
```
```js
```

### Ranges & Dynamic Indexes
```coffee
# inclusive range
[1 to 10]

# exclusive range
[1 til 10]

# from 0 to n
[to 10]

# stepped
[0 to 10 by 2]

# reversed
[3 downTo 0]       # 3, 2, 1, 0
[3 downTil 0]      # 3, 2, 1
[6 downTo 0 by 2]  # 6, 4, 2, 0
[6 downTil 0 by 2] # 6, 4, 2

# slice array
myList[5 to 7]
myList[5 till 7]
myList[5 to end]
myList[5 til end]  # excludes last element

# access array at end
myList[end]
myList[-2]
```
```js
// inclusive
_.range(1, 10)
// exclusive
_.range(1, (10 - 1))
// from 0 to 10
_.range(10)
// stepped
_.range(0, 10, 2)
// reversed
_.range(3, (0 - 1))
_.range(3, 0)
_.range(6, (0 - 1), -2)
_.range(6, 0, -2)

# slice array
myList.slice(5, 7)
myList.slice(5, (7 - 1))
myList.slice(5)
myList.slice(5, myList.length - 1)

# access array at end
myList[myList.length - 1]
myList[myList.length - 2]
```


### Dot-Access for lists
```coffee
arr = [3, 4, 5]
arr.0  # 3
arr.end  # 5
```
```js
arr[0]
arr[arr.length]
```

### Guards
```coffee
thingA =
  | x is 7 |> 4
  | y is 14 |> 8
  | x + y < 9 |> 12
  | else |> 16

thingB = match x  # match? guard? syntax?
  | 7 |> 'seven'
  | % 3 |> 'fizz'
  | % 5 |> 'buzz'
  | 4, 6, 8 |> 'well its even'
  | &isGreat() |> 'great'  # x.isGreat() (??)
  | else |> 'ohwhell'

match y
  | 3 |> console.log('three!')
  | else |> console.log('not three...')

func = (arr) =>
  | arr.length > 5 |> 'arr is long!'
  | else |> 'arr is short'
```
```js
```

### Destructured Transfer

```coffee
cat = {
  furry: true
  housetrained: true
  energetic: false
}
dog = {
  energetic: true
}
dog{ furry, housetrained } = cat
```
```js
dog.furry = cat.furry, dog.housetrained = cat.housetrained;
```


### Multiline Strings/Regexes
TODO (probably just do what coffee does...)

### Possible Future Features
- comprehensions
- [| word list hooray |]
- <<<~SQL or equiv
- quoted member access (a."b-c" is a["b-c"]) to reserve postfix [] for indicating nondeterministic member access
- a.0.1 for a[0][1]
- numbers with underscores15_550km
- multiline strings, regexes


```coffee

someMethod = () ->
  console.log('hello')
  console.log("interpolating ${variables}")  # backticks are for js
  someArr = [
    1
    2
    3
    "four"
  ]
  someObj = { # only objects, never blocks
    a: 1
    b: 2
    c() =>
      thing()
      4  # implicit return
    d(a: String): void =>
      7  # not returned, b/c annotated with void
      # OR, -%> for no-implicit-return? à la livescript
  }
  someObj  # implicit return


###
block comment
###

###
# Docstring
###
class MyClass extends AnotherClass
  constructor(arg1: SomeType, arg2: []Another) ->
    ^arg1 = arg1  # this.

  member(): MyClass ->
    foo = doThing()  # const
    let mutableVar = 3
    var someOtherMutable = null
    result <-- somePromise(foo)  # await
    mutablevar = 2
    oneThing  # gonna have to figure this out
      .anotherThing()
      .aThirdThing()
    this

`function() { 'old skool js' }` # backticks to drop down to ES6
`1 & 0`  # disallow all bitwise ops; require use through `backticks`
         # or, like livescript, surround with `.` like .&. and .<<.


fn myFunc() ->
  if 1 is 1  # ===
    yup()
  if 1 isnt 2 # !==
    yup()
  if 1 like '1'  # ==
    yup()
  if 1 unlike 'one'  # !=
    yup()
  elif 1 isnt 2  # else if
    yup()
  if true and true  # &&
    yup()
  if false or true  # ||
    yup()


import React, { Component, PropTypes } from 'react'

type props = { propA: number, propB: ?number }
SomeComponent = ({ propA, propB = 7 }: props): Component ->
  <div>
    {propA + propB}
  </div>
SomeComponent.propTypes = {
  propA: PropTypes.number.isRequired
  propB: PropTypes.number

export default SomeComponent

@someDecorator
class ClassyComponent extends Component
  constructor(props) ->
    super(props)
    ^state = {
      thing: 3

  handleClick(event: DomEvent) =>
    { target: { value } } = event
    ^setState({ value })

  render({ propA, propB }) ->
    <div onClick={^handleClick}>
      {propA + propB}
    </div>


add = (a:number = 3, b:number): number => a + b


withoutReturn = (a:number = 3, b:number): void =>
  console.log(a, b)



fetchSomething = (url) =/>
  resp <- fetch(url)
  json <- resp.json()
  json

async function fetchSomething(url) {
  resp = await fetch(url)
  json = await resp.json()
  return json
}

# getters / setters
class Ragone
  name =get>
    "${.firstname} ${.lastname}"

  name
    =&> "${.firstname} ${.lastname}"
    =!> .prop = it

  dogName: string
    =get>
      "hello"
    =set>
      .someProp = it

  dogName: string
    =get>
      "hello"
    =set>
      .someProp = it

lowerCaseAllStringsInList = (): []String => it.map(=> it.toLowerCase())  # it must be of inferrable type


# possibly more complete:

# possible rules for whitespace...
- line preceding indent must start with...
  - if, elif, for, while, class, catch, interface
- or end with:
  - ->, -@>, -*>, =>, =/>, =*>, do, try, finally

```




# typing to Razzi:


subject verb object
myObj.doSomething()
Object.doSomething(myObj)
anyVar.isBlank()
3.months.from_now

extend Number
  multiplyByTwo = () => this * 2

2.multiplyByTwo()

multiplyByTwo(x: Number) => x * 2

2~multiplyByTwo!.someOtherThing!~keepGoing!.wooHoo!
multiplyByTwo(2)

myObj~entries!.map! x =>
    x * 2
  .map! => it / 2

notes from email at home:
provide bundled eslint config (eg; airbnb) by default, let user override?
same with flow?
include all ES7 probably
map over method? `.map(&:strip)` (is this ES7 `::` ?)
`|>` – how to do with awaits?
test with crazy sequelize query
