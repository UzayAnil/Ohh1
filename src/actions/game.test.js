// src/actions/game.test.js
import { CREATE_GAME, MOVE } from './types'
import { createGame, move } from './game'

describe('createGame(size)', () => {
  const row = 6
  const action = createGame(row)

  it('has the right type', () => {
    expect(action.type).toEqual(CREATE_GAME)
  })

    it('has only properties board and locked', () => {
      expect(Object.keys(action.payload)).toEqual(['board', 'locked'])
    })
})

describe('move(row, col, value)', () => {
  const [row, col] = [0, 1]
  const action = move(row, col)

  it('has the right type', () => {
    expect(action.type).toEqual(MOVE)
  })

  describe('its payload', () => {
    it('has the row', () => {
      expect(action.payload.row).toEqual(row)
    })

    it('has the col', () => {
      expect(action.payload.col).toEqual(col)
    })

    it('has only those properties', () => {
      expect(Object.keys(action.payload)).toEqual(['row', 'col'])
    })
  })
})
