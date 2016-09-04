

hoookay
so

I don't want people's first reaction to LightScript to be, "oh, its coffeescript. no thanks."

I also want it to be feel like JavaScript. 

I also want it to feel distinct. 

I also want it to feel like a heavy-duty, if light-weight, language.

I also want to shoehorn whitespace in to everybody's codebase, because whitespace is the fucking best.

I also want to appeal to people who just obstinately don't like whitespace.

I also want to enable non-whitespace for those times when you want blocks. 



hookay. 

So, you definitely keep `=>`, and it's probably cool to extend that as well. But, `->` is a coffeescript thing that isn't really *necessary* to add. `function` is way too many letters, but `fn` is actually easier to type than `->` anyway, and is just as long. 

So here's what I'm thinking. 

- `fn optionalName() { ... }` is the same shit as in JS
- methods are as in JS, with braces
- `thing := () => {}` as in JS, but also allow
- `thing() => {}` and encourage it
- `thing() => expression` is also allowed
- `thing() => multi-line/statement expression` is *also* allowed!
    + this is the key thing
    + has implicit returns
    + bummer is it can't just return an object right away
    + but could maybe return an object if brace is after newline?
- within `{ ... }`, either `fn` or `=>`, `return` is required
- but when you're whitespacing, returns are implicit
- whitespacing is encouraged by linter, unless disabled –– that's "dark mode"
- `fn someFn() ->` the arrow here replaces the braces.
- similarly, a method can use `->` as stand-in for braces.
- this is similar to how `{` starts a multiline object and `!` starts a multiline call.
- Again, when you use the whitespace version, returns are implicit!


Examples:

    class Foo
      foo() {
        return 1
      }
      bar() -> 1
      baz() -> 
        1

    fn foo() {
      return 5
    }
    foo := () => {
      return 5
    }
    foo() => {
      return 5
    }
    foo() => 5
    foo() => 
      console.log('hello')
      5
    foo := () =>
      console.log('hello')
      5















