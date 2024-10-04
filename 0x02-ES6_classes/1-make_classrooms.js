import Classroom from './0-classroom';

export default function initializeRooms() {
  const array = [];
  const createRoom = (maxStundentSize) => new Classroom(maxStundentSize);
  array.push(createRoom(19), createRoom(20), createRoom(34));
  return (array);
}
