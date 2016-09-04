# Iteration

## Arrays

    for i from 0 til 10
        for (let i = 0; i < 10; i++)
    for i from 0 til 10 step 2
        for (let i = 0; i < 10; i += 2)
    for i from 10 downTil 0 step 2
        for (let i = 10; i > 0; i-= 2)

    for i from 0 til array.length
    for i from array.length - 1 downTil 0

    for i from array
        # UNSURE; error, or:
        for (let i = 0; i < array.length; i++)
    for i, elem from array
        for (let i = 0, elem = array[i]; i < array.length; elem = array[i++])
        // or just
        for (let i = 0; i < array.length; i++) {
            const elem = array[i];
    for i, elem from 0 til array.length
        # error

    for elem of array
    for [ i, elem ] of array.entries!

    for key in array
        # error
    for key, val in array
        # error
    for own key in array
        # error

## Objects / Collections

    for value of obj
    for key in obj
    for key, value in obj
        for (let key in obj) { const value = obj[key];
    for own key in obj
        for (let key in obj) { if (!obj.hasOwnProperty(key)) continue;
    for own key, value in obj
        for (let key in obj) {
            if (!obj.hasOwnProperty(key)) continue;
            const value = obj[key];

## Single-Line Syntax

    for elem of array: doSomething(elem)

## Multi-Line Syntax

    for elem of array
      doSomething(elem)

    # trailing colon is a compiler warning for multiline `for`

## Comprehensions

    doubledItems = [ for item of array: item * 2 ]
    filteredItems = [ for item of array: if item > 3: item ]
    objFromArr = { for i, item from array: "thing_{i}", item }
    objFromObj = { for key, value in obj: key, value * 2 }

    # trailing punctuation always required with comprehensions.


## Implicit Returns (UNSURE)
For loops, unlike in CoffeeScript, are not expressions.

    foo() ->
      for item of array
        "item is {item}"
    # error; use `map` instead.

    items = for item of array
      "item is {item}"
    # error; use `map` instead
