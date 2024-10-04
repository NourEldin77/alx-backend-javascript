export default class Building {
  constructor(sqft) {
    this._sqft = sqft; // eslint-disable-line no-underscore-dangle
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }

  set sqft(sqft) {
    this._sqft = sqft; // eslint-disable-line no-underscore-dangle
  }
}
