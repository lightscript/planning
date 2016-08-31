
# Intro



## Assignment   

## `const`
    foo = 'hello'

## `let`
    let bar = 3
    bar = 4
    
    let baz
    baz = 4

## `var`
`var` will probably not be added.

## Annotated
    foo: string = 'hello'
    maybeFoo: ?string = foo || null
    let bar: number
    let baz: number = 'foo'
LightScript uses Facebook's [Flow](flowtype.org) typechecker and type syntax.


## Comments
    # this is a comment
    ###
    This is a multi-line comment.
    ###


## Function Definition

### Basic
    foo() -> 1
    foo(a, b) -> a + b

### Annotated
    foo(a: string, b: number): number ->
      a.length + b

### Anonymous
    fnWithCallback(() -> 42)
    fnWithCallback(-> 42)

### Bound
    foo() => this.someProp

### Async
    foo() -/>
      Promise.resolve(42)
    boundFoo() =/>
      Promise.resolve(this.answer + 42)
See also [await]()

### Generators
    foo() -*>
      yield 3
      yield 4


## Methods

### Basic Methods
    obj = {
      foo() -> 'hello'
      bar() ->
        'hi there'
    }

### Bound Methods
    obj = {
      name: 'Jack'
      foo() => this.name.toUpperCase()
    }
---
    const obj = {
      name: 'Jack',
      foo() {
        return this.name.toUpperCase();
      },
    };
    obj.foo = obj.foo.bind(obj);

### Getters and Setters
    obj = {
      get foo() -> 'hello'
      set foo(newValue) -> this._foo = newValue
    }

See also [Classes]().


## Conditionals

### Basic `if`
    if a === b
      console.log('a is b')

### One-line `if`
    if a !== b: console.log('a isnt b')
    foo(a) ->
      if a.length === 0: return
      # ...

### One-line `if` with early `and return`
    foo(a) ->
      if a.length === 0: console.log('darn') and return
      # ...

### Ternaries
    animal = if canBark(): 'dog' else 'cow'

### `null`-default Ternaries 
    animal = if canBark(): 'dog'
---
    const animal = canBark() ? 'dog' : null;

### Multiline Ternaries (aka `if` expressions)
    animal = if canBark()
        'dog'
      else if canMeow()
        'cat'
      else 
        'cow'
TBD: if you need the extra indent or not.


## Logic

### or
    c = a || b
TBD: `or` keyword

### and
    c = a && b
TBD: `and` keyword

### not
    not c
TBD: also allowing `!` prefix, and/or removing `not` entirely.
The problem is that `!` is also used in the [bangcall feature]().

### Bitwise Operators
Bitwise operators (namely `|`, `&`, `^`, `~`, `<<`, `>>`, `>>>`) are not included in the language. Instead, they are [provided as functions]() in the standard library.


## Existentialism

NOTE TO SELF: https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md#comparing-nulls-to-undefineds

## Existential operator
    if a?
      1
---
    if (a != null) 
Note that this does not perform an "undeclared" check, as CoffeeScript does.
If you want to deal with global variables, you must access them from the global object (eg, `window`) directly.
The compiler or linter should catch references to undeclared variables.

### null-or
    c = a ?? b
---
    const c = (a != null ? a : b);

### or-equals
    obj.prop ?= 42
---
    obj.prop = (obj.prop != null ? obj.prop : 42);

### Elvis operator
    d = a?.b?.c
---
    const d = (a != null 
      ? (a.b != null ? a.b.c : null) 
      : null
    );
Note that the default value is `null`, unlike CoffeeScript's `undefined`.

### Safe calls
    if foo?()
      1
---
    if (isFunction(foo) ? foo() : null)
      1
See [the standard library]() for `isFunction` (tl;dr, it comes from lodash).


## Objects and Arrays

### Single-Line Objects
    obj = { a: 'a', b, [1 + 1]: 'two', ...anotherObj }
Destructuring, dynamic names, and splats are the same as in JS.

### Multi-Line Objects
    obj = {
      a: 'a'
      b
      [1 + 1]: 'two'
      ...anotherObj
Commas are not necessary. Using commas in a multiline object raises a linting error. 

More importantly, note that the closing `}` is not required; a dedent is used instead. It is a linting error to use a `}` for an object that is less than ¿25? lines. It is a linting error not to use a `}` for an object that is longer.

### Nested Objects
    obj = {
      a: 
        a1: 1
        a2: 2
      b: 
        b1: 1
        b2: 2
      c: [
        1
        2
      d: 'd'
Once you have begun an object definition with a `{`, you do not need to 

### Destructured Property Transfer
    bar = { a: 1 }
    foo = { b: 2, c: 3, d: 4 }
    bar{ b, c } = foo
---
    const bar = { a: 1 }
    const foo = { b: 2, c: 3, d: 4 };
    bar.b = foo.b;
    bar.c = foo.c;

### Single-Line Arrays
    arr = [1 2 3 (5 - 1) 5]
Commas are unnecessary, and raise a linting error. Elements that are expressions must be wrapped in parentheses.

### Multi-Line Arrays
    arr = [
      1 
      2 
      (2 + 1) 
      5 - 1
      5
Again, commas are unnecessary, and raise a linting error. Elements that are expressions no longer need to be wrapped in parentheses, but doing so does not raise a linting error.

### Word Arrays
    words = w[hello world, it's been a while.]
---
    const words = ['hello', 'world,', 'it\'s', 'been', 'a', 'while.'];
Prefixing an array with `w` means all its elements are treated as strings. Interpolation occurs as normal, without 

### Word Arrays with Interpolation
    n = 7
    words = W[hello world, it's been {n}+ years.]
---
    const words = ['hello', 'world,', 'it\'s', 'been', `${n}+`, 'years.'];
To use interpolation within a word array, use an uppercase `W`.

## Classes

### Basic Classes
    class Animal
      talk() -> 'grrr'
    class Person extends Animal
      talk() -> 'hello!'

### Decorators
    @classDecorator
    class Animal
      @methodDecorator
      talk() -> 'grrr'
The same as ES7.

### Shorthand for `this.`
    class Animal
      talk() -> 
        ^noise
---
    class Animal {
      talk() {
        return this.noise
      }
    }
The pin operator `^` can be used as shorthand for `this.` outside of classes as well. 

Note that unlike coffeescript, `^` cannot be used on its own to refer to `this`. So, for example, `return this` must be written instead of `return ^`

### Getters and Setters
    class Animal
      get noise() ->
        ^sound || 'grrr'
      set noise(newValue) ->
        ^sound = newValue

### Class properties ("class instance fields")
    class Animal
      noise = 'grrr'
As in EcmaScript.

### Static properties and methods ("class static fields")
    class Animal
      static isVegetable = false
      static canMakeNoise() -> true
As in EcmaScript.

Note that you cannot use a fat arrow (`=>`) with a static method.

### Pinned constructor params
    class Animal
      constructor(^noise, { limbs: { ^numLimbs } }) ->
---
    class Animal {
      constructor(noise, { limbs: { numLimbs } }) {
        this.noise = noise;
        this.numLimbs = numbLimbs;
      }
    }

### Bound methods
    class MyComponent extends React.Component
      handleClick() =>
        ^setState({ clicked: true })
      render() ->
        <button onClick={^handleClick}>
          Click me!
        </button>
---
    class MyComponent extends React.Component {
      constructor(...args) {
        super(...args);
        this.handleClick = this.handleClick.bind(this);
      },
      handleClick({ currentTarget: { value } }) {
        this.setState({ value });
      },
      render() {
        return (
          <button onClick={this.handleClick}>
            Click me!
          </button>
        );
      }
    }       
Use a fat arrow (`=>`) to bind class methods. This will be added to the constructor after a `super` call, which will be created if it does not exist.


## Try/Catch


## Switch
Switch statements are not allowed. Use `match` or if-else chains instead. 

This omission is because switch statements tend to be anemic, inconvenient, and confusing. They may be added in the future.


## Numbers

### Underbars:
    oneMillion: Cents = 1_000_000_00
---
    const oneMillion: Cents = 100000000;

### Restrictions: 
- Decimals must be prefixed with a zero (eg, `.9` is not allowed, but `0.9` is). 
- Scientific notation (eg; `10e3` is not allowed).

These restrictions are for clarity, simplicity, and ease of parsing, and may be relaxed in the future. 
