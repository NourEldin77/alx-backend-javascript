const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {

  // Test: Both numbers are whole (no rounding needed)
  it('should return the sum of two whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  // Test: Round second number down
  it('should round the second number down when it has a fractional part < 0.5', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  // Test: Round both numbers down
  it('should round both numbers down when they have fractional parts < 0.5', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  // Test: Round the first number down
  it('should round the first number down when it has a fractional part < 0.5', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  // Test: Round second number up
  it('should round the second number up when it has a fractional part >= 0.5', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  // Test: Round both numbers up
  it('should round both numbers up when their fractional parts >= 0.5', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  // Test: Round the first number up
  it('should round the first number up when it has a fractional part >= 0.5', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  // Test: Round both numbers down with trailing 9s
  it('should round both numbers down when they have fractional parts close to 0.5 but < 0.5', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });

});
