import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqrt, floors) {
    super(sqrt);
    this._floors = floors; // eslint-disable-line no-underscore-dangle
  }

  set floors(floors) {
    this._floors = floors; // eslint-disable-line no-underscore-dangle
  }

  get floors() {
    return this._floors; // eslint-disable-line no-underscore-dangle
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // eslint-disable-line no-underscore-dangle
  }
}
