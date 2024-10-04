export default class Airport {
  constructor(name, code) {
    this._name = name; // eslint-disable-line no-underscore-dangle
    this._code = code; // eslint-disable-line no-underscore-dangle
  }

  get code() {
    return this._code; // eslint-disable-line no-underscore-dangle
  }

  set code(code) {
    this._code = code; // eslint-disable-line no-underscore-dangle
  }

  set name(name) {
    this._name = name; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  toString() {
    return `[object ${this._code}]`; // eslint-disable-line no-underscore-dangle
  }
}
