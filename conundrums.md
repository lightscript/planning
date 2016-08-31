```js
async function lint (textEditor) => {
  // ...
  let result
  try {
    result = await exec(executable, ['status', '--json'], { cwd: fileDirectory, ignoreExitCode: true })
  } catch (error) {
    if (error.message.indexOf(INIT_MESSAGE) !== -1) {
      return await linter.lint(textEditor)
    } else if (error.code === 'ENOENT') {
      throw new Error('Unable to find `flow` executable.')
    } else {
      throw error
    }
  }

  return toLinterMessages(result)
}
```

```lightscript
let result
try
  result <= exec(executable, ['status', '--json'], { cwd: fileDirectory, ignoreExitCode: true })
catch error
  if error.message.indexOf(INIT_MESSAGE) !== -1
    return <- linter.lint(textEditor)
  elif error.code === 'ENOENT'
    throw new Error('Unable to find `flow` executable.')
  else
    throw error
toLinterMessages(result)
```
or
```lightscript
result = try
  <- exec(executable, ['status', '--json'], { cwd: fileDirectory, ignoreExitCode: true })
catch error
  if error.message.indexOf(INIT_MESSAGE) !== -1
    <- linter.lint(textEditor)
  elif error.code === 'ENOENT'
    throw new Error('Unable to find `flow` executable.')
  else
    throw error

match result
  | ExecResult |> toLinterMessages(result)
  | LintResult |> result
```
or
```lightscript
try
  result <= exec(executable, ['status', '--json'], { cwd: fileDirectory, ignoreExitCode: true })
  toLinterMessages(result)
catch error
  if error.message.indexOf(INIT_MESSAGE) !== -1
    <- linter.lint(textEditor)
  elif error.code === 'ENOENT'
    throw new Error('Unable to find `flow` executable.')
  else
    throw error
```
??
```
lint(textEditor) =/>
  // ...
  result <?= exec(executable, ['status', '--json'], { cwd: fileDirectory, ignoreExitCode: true })
  if result~is(Error)
    if !error.message~include(INIT_MESSAGE)
      return <- linter.lint(textEditor)
    else if error.code === 'ENOENT'
      throw new Error('Unable to find `flow` executable.')
    else 
      throw error

  toLinterMessages(result)
```
Ahhhh! Mystery solved.




### Ternaries/ifs in Stateless Components...

MyComponent = ({ hidden }) => if not hidden
    <div>
      Hello World
    </div>
  else null

# or

MyComponent = ({ hidden }) => if hidden then null else
  <div>  # should this be req'd to be 2-indent? Hrm..
    Hello World
  </div>

# or

MyComponent = ({ hidden }) => if not hidden
  <div>
    Hello World
  </div>
else null
# ^^ hell no

# or

MyComponent = ({ hidden }) =>
  if not hidden
    <div>
      Hello World
    </div>
  else null
# I think this one!



### Random stuff copied from an email

myFn(x, {a: [1, 2, 3], b: 4, c, d: { e, f, g }}, () => 4, () => {
  blah()
  return 5
})

myFn! x, {
    a: [
      1
      2
      3
    b: 4
    c
    d: {
      e
      f
      g
  => 4
  =>
    blah()
    5

myFn! {
  a: 1
  b: 2

myFn! {
    a: 1
    b: 2
    boundMethod() =>
      2
  => 'hello'

myFn! =>
    console.log(1)
    x
  {
    option: 'val'
    hello

fred = =>
  it * 4

cheese = { a: 1, b: 2
myFn! { a: 1, b: 2  # how do we know the next line isn't part of the obj, or a parameter?
  ~pairs!
  .map! => it.1 * 4
  .filter! => it < 5

# becomes...

_.pairs(myFn({ a: 1, b: 2 }))
  .map(it => it[1] * 4)
  .filter(it => it < 5)

what about...
myFn! { a: 1, b: 2
  ~pairs!
  .map! => it.1 * 4
  ~uniq!
# becomes...
_.uniq(
  _.pairs(
      myFn({ a: 1, b: 2 })
    )
    .map(it => it[1] * 4)
)
# hrmm...

thing =
  a: 1
  b: 2

thing = {
  a
  b
arr = [
  a
  b c  # shitty bad coffeescript, syntaxerror in lightscript
  d! e # lightscript is more explicit


myFn({a: [1, 3, 5
  hello
# is different from
myFn({a: [1, 3, 5
    hello
# (in the latter case, hello is destructured)

