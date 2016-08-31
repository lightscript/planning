


### Extensions

import { uniq, max, includes } from 'lodash'

// add types to uniq
methodize uniq // creates `__uniq(firstArg:Array)`
// ... nah

myList..uniq()
becomes uniq(myList)
and if `uniq` is not in scope, becomes `_.uniq(myList)`
(it is encouraged to include _ in global scope via webpack)

or maybe with myList~uniq()

component.init() if component~isObject() and component.init~isFunction()

for [ key, list ] of myObj~pairs()
  list~each(=>
    print("{key} has a child {it}")
  )


### Getters/Setters
Problem is `g` and `s` in function annotations clash with `generator` and `static`. Maybe that's fine, and they instead use `y` and `t`. Also weird with indentation and having two functions with the same name (getter and setter both).
Could use pipes:
myObj = {
  first: 'Abdul'
  last: 'Woo'
  name |
    get => "{first} {last}"
    set => [ @first, @last ] = it.split(' ')
  firstName | set => @first = it
  lastName | get => @last


### imports
from 'react' import React
from 'react' import React, { PropTypes }
from './components' import Compontents, {
  CompOne
  CompTwo
  CompThree
from './components' import * as {
  CompOne
  CompTwo
  CompThree


### Bang calls
someFn! arg1, arg2
someFn! thing, {
    prop
  (x, y) =>  x + y
myObj~pairs!uniq!map! => it.1 * 2




### Function Usage Annotations
(no idea here yet...)

// indicate that a variable will be mutated
someFn = (&x) =>
  x.someProp = 'modified'

// indicate that a variable will be reassigned
someFn = (let x: int, y) =>
  if not y
    x = 7

// indicate that a function modifies `this` (maybe too hard to do)
unboundFn = (x) -mut>
  this.prop = x
myObj = {
  prop: 1
  method() =mut>  # maybe =!> or =&>
    @prop = 2
  method2() =mut>
    @method()

// indicate that a function modifies anything that is outside its scope
i = 0
mutatingFn = -?idk?>
  i += 1

// indicate that a function is referentially transparent (does not read other things)
someFn = (x, y) -pr> // for pure-read
  z = otherPureReadFn(x, y) // must be pure-read also
  z + 1
invalidFn = (x, y) -pr>
  z = nonPureReadFn(x, y) // invalid
  z = x + i // invalid, uses var not defined in fn scope
  z = this.prop + x // invalid, reads from `this`


### Explicit runtime exporting of types

// is not processed by tcomb
// ... actually maybe not, a minifier can always removed unused stuff
type Person = {
  name: string
  age: number

// is processed by tcomb
runtype Dog = {
  name: string
  isSmall: bool

match personOrDog
  | Person |> 'they are a person'  // doesnt work
  | Dog |> 'they are a dog'  // works


### Mixins
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Mix-ins
Rather than typing:
class Bar extends CalculatorMixin(RandomizerMixin(Foo)) { }
class Bar extends Foo~RandomizerMixin!~CalculatorMixin!
... honestly that seems sufficient so nevermind.


### Disallow implicit window (global) access
window.dog = 'bark'
console.log(dog) // ReferenceError or SyntaxError or something
global.cat = 'meow'
console.log(cat) // ReferenceError or SyntaxError or something


### Lonely, Elvis, Existential ?
if thing? // if (thing !== null)
obj?.method!  // ... whatever coffeescript does
// or...
obj&.method!  // ... whatever coffeescript does


### Imm
# icicle operator:
myFrozenObj *= {a: 1, child: { b: 2 } }
# becomes:
const myFrozenObj = stdlib.deepFreeze({a: 1, child: { b: 2 }})

... need some way of doing deep, non-mutating merges conveniently?
myNewObj *= myFrozenObj~*~{ child: { c: 3 } }
(could be syntax or just stdlib, or just make people use update)

### Random stuff with Razzi:

type Person = {
  name: string
  age: number
  shoeSize: ?number
}
person1: Person = {
  name: 'Razzi'
  age: 23
}
person2: Person = Person({
  name: 'Alex'
  age: 24


// becomes...
Object.freeze({
  name: 'Alex'
  age: 24
  shoeSize: null
})
person2Two = Person.update! person2, {
  shoeSize: {
    $set: 9.5
  age: {
    $set: 12

# rules for resolving `~`:
  1. look for a function in scope with the name
  2. look for a function on the type declaration of the type of the variable
  3. look in lodash

person~map
person.map
person2 = Person.update! person, {
  name
  age

type Animal = {
  ...
}

type Cat extends Animal {

}

type Lion extends Cat {

}

Object.freeze
update

meow: Cat = {
  name: 'fuzzy'

someFn(meow: Animal): Animal ->
  ...
  Lion.update! meow, {
    name: $set: 'newName'
  Lion(update meow, {
    set name 'samos'
    push feelings 'sad'

result = someFn(meow)
match result
  | Lion |> 'its a lion'
  | Cat  |> 'its just a cat'

imm person3 = {
  name: 'Razzi'
  age: 27
}

if razzi is Animal
if razzi === Animal

samos = Animal({
  name: 'samos'
})
samos._meta

razzi 3 es6 asks
assignable if
immutable data without Object.freeze
no 'new' keyword


Boolean(falsy)

new Boolean(falsy)

plugins: [
    new MyPlugin({options: 'nada'})
]

plugins: [
  MyPlugin.new({options: 'nada'})
]


### Immutability

- come up with a better syntax for alex~Person.update({ name: { $set: 'al' }})
  - allow alex~update somehow
  - replace the object that has $set with something better, maybe look at haskell/clojure
    + consider something like immutable.js? 
```
alex.name~~set! 'al'
company.office.coords.lat~~set! 48.1232
company.office.coords~~apply! ({ lat, lng }) => ({ lat: lat+2, lng: lng+2 })
company.employees~~push! { name: 'alex' }
company.employees[-1]~~merge! { age: 24 }
company.employees.-1~~merge! { age: 24 }
```
```
alex.constructor.update(alex, { name: { $set: { 'al' } })
company.constructor.update(company, { 
  office: { coords: { lat: { $set: 48.1232 } } 
})
// etc...
```

Nesting? How to do this...

    Company.update(company, {
      office: {
        coords: {
          lat: { $set: 42 },
          lng: { $set: 42 },
        },
        name: { $set: 'the new office' },
        timesMoved: { $apply: function(x) { return x + 1; } }
      }  
    })
... One way would be to say, okay, that should be a new command...
pending https://github.com/gcanti/tcomb/issues/247... 

    struct Office = {
      name: string
      coords: 
        lat: number
        lng: number
      timesMoved: ?number
      
      $moveTo({ lat, lng, name }, oldOffice) -> { 
        name
        coords: { lat, lng }
        timesMoved: oldOffice.timesMoved + 1 
      
    struct Company = {
      name: string
      office: Office
    company.office~~moveTo! { lat: 42, lng: 42, name: 'the new office' }


I think that's pretty effing compelling... you can always do nested stuff manually, and at that point it should probably be explicit anyway... 


### Inline Tests

... I think naahhh... but it'd probably look like this: 
    
    foo(a: string, b: number): number ->
      a.length * b
    check foo
      given 'hello', 2 returns 10
      given 'bob', 10 returns 30
would want to enforce that `check foo` comes on next line, and must be `foo`...

how would that look for class methods?



### Destructured Object Instantiation
    foo = { b: 2, c: 3, d: 4 }
    bar = { b, c } = foo
    # OR
    bar = foo{ b, c }
---
    const foo = { b: 2, c: 3, d: 4 };
    bar.b = foo.b;
    bar.c = foo.c;

UNKOWN: Do `b` and `c` enter scope?


### Comma-free Single-line Objects
    obj = { a: 'a' b [1+1]: 'two' }

### Single-Line Object Nesting
    obj = { aunt: 4, parent: child: grandchild: 5 }
Would need to come at the end.
