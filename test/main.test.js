QUnit.module('MAIN MODULE', {})

QUnit.test('TEST convertRoman', assert => {
  assert.equal(convertRoman(1), I, 'Test romanval = 1')
  assert.equal(convertRoman(4), IV, 'Test numberval = 4')
  assert.equal(convertRoman(5), V, 'Test numberval = 5')
  assert.equal(convertRoman(10),  X, 'Test numberval = 10')
  assert.equal(convertRoman(10), X, 'Test numberval = 10')
})