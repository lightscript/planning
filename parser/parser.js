import { symbolTable } from './symbols'

class Parser() {
  constructor(tokens, scope) {
    this.scope = scope
    this.tokens = tokens
    this.currentToken = null
    this.currentIndex = 0
  }

  advance(expectedId = null) {
    if (expectedId && expectedId !== this.currentToken.id) {
      throw new Error(`Was expecting to advance to ${expectedId}, got ${this.currentToken.id}`)
    }

    if (this.currentIndex >= this.tokens.length) {
      this.currentToken = symbolTable['(end)']
      return
    }

    const nextToken = this.tokens[this.currentIndex]
    this.currentIndex += 1

    let { value, type } = nextToken
    let symbol
    if (type === 'name') {
      symbol = scope.find(value)
    } else if (type === 'operator') {
      symbol = symbolTable[value]
      if (!symbol) throw new Error('Unkown operator', value)
    } else if (type === 'string' || type === 'number') {
      type = 'literal'
      symbol = symbolTable['(literal)']
    }

    this.currentToken = new symbol()
  }
}

