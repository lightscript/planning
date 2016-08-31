const SYMBOL_IDS = {
  closingParen: ')',
  closingBracket: ']',
  closingBrace: '}',

  comma: ',',
  semiColon: ';',

  literal: '(literal)',
  variableName: '(name)',
  endOfFile: '(end)',
}

const BINDING_POWERS = {
  closingParen: 0,
  closingBracket: 0,
  closingBrace: 0,

  comma: 0,
  semiColon: 0,

  literal: 0,
  variableName: 0,
  endOfFile: 0,
}

class Symbol {
  constructor(id, bindingPower) {
    this.id = id
    this.leftBindingPower = bindingPower
    return this
  }

  // null-denotation
  nud() {
    throw new Error('nud undefined', this)
  }

  // left-denotation
  led(left) {
    throw new Error('Missing operator', this, left)
  }
}


// closers
class ClosingParen extends Symbol {
  constructor() {
    super(SYMBOL_IDS.closingParen, BINDING_POWERS.closingParen)
  }
}
class ClosingBracket extends Symbol {
  constructor() {
    super(SYMBOL_IDS.closingBracket, BINDING_POWERS.closingBracket)
  }
}
class ClosingBrace extends Symbol {
  constructor() {
    super(SYMBOL_IDS.closingBrace, BINDING_POWERS.closingBrace)
  }
}

// separators
class Comma extends Symbol {
  constructor() {
    super(SYMBOL_IDS.comma, BINDING_POWERS.comma)
  }
}
class SemiColon extends Symbol {
  constructor() {
    super(SYMBOL_IDS.simiColon, BINDING_POWERS.simiColon)
  }
}

// not sure why these are here yet...
class Colon extends Symbol {
  constructor() {
    super(SYMBOL_IDS.colon, BINDING_POWERS.colon)
  }
}
class Else extends Symbol {
  constructor() {
    super(SYMBOL_IDS.else, BINDING_POWERS.else)
  }
}

// special fake symbols
class Literal extends Symbol {
  constructor() {
    super(SYMBOL_IDS.literal, BINDING_POWERS.literal)
  }
}
class VariableName extends Symbol {
  constructor() {
    super(SYMBOL_IDS.variableName, BINDING_POWERS.variableName)
  }
}
class EndOfFile extends Symbol {
  constructor() {
    super(SYMBOL_IDS.endOfFile, BINDING_POWERS.endOfFile)
  }
}

