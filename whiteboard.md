

# dealing with for loops

for x in list:
  print x

for i, x from list:
  print i, x

for i from 0 to 10:

for i from range(0, 1000):

for (i = 0; i < 10; i++)

for i from [0...10]

for i from 





foo(a: number, b: number): number -> 
  a + b

foo(a, b): void ->
  console.log(a, b)

export class Foo extends Bar
  constructor(^a, ^b) ->
    super(a, b)
  foo() =>
    1

foo() ->
  c = if a()
    1
  else if b()
    2
  c + 1

  c = if a(): b else 'hi'

foo(arr) ->
  for (var i = 0; i < arr.length; i++)

  for elem of arr: 
    if elem > 3: 
      doSomething(elem)

  for own k, v in obj
  ---
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    const val = obj[key]
  }

  for 





obj = {
  a: 'a'
  b
  [1 + 1]: 'two'
  child:
    nested: 'prop'
    arr: [
      1
      2
      3

arr = [(1 typeof 3) 1 3 5 (1 + 1) func(a, b) anotherFunc('hello') ]

foo()

foo!.bar!.hello(a, b)

foo! a, {
  child: prop
  b

setTimeout! ->
    foo()
  1000

foo! bar(a)


aFoo() -/>
  try
    result: Json <- fetchSomething()
  catch (err)
    ...

  result <!- fetchSomething()
  if result is Error
    handleIt()
    return/throw


  const result = await wrapAsyncResult(fetchSomething);


AsyncResult<T> = T | AsyncError
async function wrapAsyncResult(fn: any => T): AsyncResult<T> {
  try { return await fn() } catch (err) { return err };
}

  result <!- fetchSomething()
  match result
    | AsyncError |> 'goodbye'
    | Json |> 'hello'

  result, err := someCall()
  if err != nil {
    handleIt()
  }

type PositiveInteger = refinement(number, x => x % 0 === 0 && x >= 0)
type Person = {
  name: string
  age: ?number

alan = Person! {
  name: 'alan'

Person.update(alan, { age: { $set: 27 } })
alan2 = alan.age~~$set(27)


class Person
  talkTo(otherPerson)

alan = Person()
alan.talkTo(alex)

type Person...
talkTo(person1: Person, person2: Person)

talkTo(alan, alex)


alan
  ~talkTo(alex)
  ~talkTo(jerry)
  ~talkTo(bob)

if x~isNumber!
  doMath(x)

3~binaryLeftShift(8)
<<
  result.something()
  <- waitForSomething()
  result

foo(let a, mut b: object) ->
  a += 1
  b.prop = 7

foo(8, mut { b: 'hi' })

a = 7

foo() -pr>
foo() -pw>
foo() -prw>


arr[i+1]

<!-- CASES TO EXPLICITLY DISALLOW (PROBABLY) -->
a?.b = c()
++a?.b

gFoo() -*>
  yield something()
  yield* someOtherGenerator()














foo() ->
  1

foo(): void -> console.log(1)

foo(a: number, b: number): number ->
  a + b

foo(a, b) -> 
  c = if b > 5
    b 
  else 
    8

  
  newArr = [for x of arr: if x > 4: 7]

foo(x: ?object) ->
  x?.prop

struct Person = 
  name: string

type Robot = 
  name: string

alex = Person({ name: 'alex' })
alex is Person // true
alex is Robot // false

alex.name = 'bob'
alex2 = Person.update! alex {
  name: { $set: 'bob' 


class Person
  constructor(^name) ->
  sayHello() -> 
    "Hi, I am {^name}"
  greetFriend(friend: string) -> 
    "Hi, {friend}!"

alex = new Person('alex')
alex.sayHello()
alex.greetFriend('Reed')

type Person = {
  name: string

sayHello(person: Person) -> "Hi, I am {person.name}"

sayHello(alex)
greetFriend(alex, reed)

alex~greetFriend! reed
alex~isNull!
alex~uniq!


foo!
  a
  b
  c

ReactDOM.render!
  <Application>
    <Blah />
  </Application>
  , document.querySelector()

arr = [1 3 4]

obj = {
  a: 1
  b: 2



doFoo() ->
  foo()
    .then(resp => resp.json())
    .then(json => someOtherThing(json))

type FetchResult = ...
type AsyncResult = FetchResult | AsyncError;

asyncFoo() -/>
  resp <!- fetch('someUrl')
  if t.is(a, Number)
  match resp 
    | AsyncError |> 
      doSomething()
    | else |> 

  json <- resp.json()
  <- someOtherThing(json)

async function asyncFoo() {
  let resp;
  try {
    resp = await foo()
  } catch (err) {
    console.error(err)
    resp = ...something?
    return? idk

  }
  const json = await resp.json()
  return await someOtherThing(json)
}


foo(a: ?string = 'hi') ->
  if a === null
    doX()
  else
    doY(a)


























# for loops
for (var i = 0; i < array.length; i++)
for (var i = 0, item = array[i]; i < array.length; item = array[i++])

for i from 0 til array.length step 1
for i from 0 to array.length - 1 step 1
for i from 0 til array.length
for i from array
for i, elem from array

for elem of array


array[til 4]
array[3 to]
array[4 til 5]
array[:5]

array = [5 to 10]
array = [5 till 10]
array = [5..10]








bar(mut obj: object): void ->
  obj.prop = 'modified'

o = { prop: 'starting' }
bar(o)
o~bar()
o.prop // 'modified'



baz(let a: number): number ->
  a += 4
  a * 5

baz(2)

foo(a: number, b: string): boolean ->
  c = if a > 10
    b.length === a
  else
    false

  not c



class Person
  constructor({ ^catchphrase }) ->
  talk() ->
    "yo, {^catchphrase}"

alex = new Person({ catchphrase: 'uhhmmm' })
alex.catchphrase
alex.talk()

struct Person 
  catchphrase: string
  name: ?string

talk(person: Person): string ->
  "yo, {^catchphrase}"

talk(alex)
say(alex, "hello")



alex = Person({ catchphrase: 'thats cool' })
alex~talk()
alex~say("hello")
alex~converseWith(hisFriend)
talk(alex)
say(alex, "hello")
converseWith(alex, hisFriend)














Hello world

foo(a: number, b: ?number): number ->
  a * b


foo(): void ->
  console.log('hi')

async function fooA() {
  try {
    const thing = await fetch(url)
  } catch (err) {
    const thing = err
  }

  return await thing.json()
}

fooA() -/>
  thing <- fetch(url)
  <- thing.json()


fooA2() -/>
  thing <!- fetch(url)
  if thing is Error
    blah()

type Dogken = Dog | Chicken
bar(): Dogken -/>

fooA2() -/>
  thing: Error | Dogken <!- bar(url)
  foo = match thing
    | Dog |> 'bark'
    | Chicken |> 'bawk'
    | Error |>
      blah()
      blah()
      2
    | else |> 'impossible'

lightscript.match(thing, Dog, -> 'bark', Chicken, -> 'bawk')


type int = number & isInt(it)
type positiveInt = number & gtZero(it)

nick = new Person()
nick.talk()

talk(person: Person) ->
nick: Person = {}
nick~talk(msg)

talk(nick)


if myObj~isEmpty()
  blah()

if foo~isNull()

if (_.isNull(foo) || _.isNumber(bar))
if foo~isNull() || bar~isNumber()

thing
  .map(..)
  .filter()
  .reduce()
  ~blah()
  ~bar()

convenience

is
a thing

1.day.from_now
Date.days.from_now(1)

fn(a, b=2, c=3, { d = 4, e = 5 }) ->


arr
  ~uniq!
  ~pluck! 'a'

someCall! firstArg, [{
    destructured
    thing: a
  {
    foo: 'foo'
    bar





fn 
