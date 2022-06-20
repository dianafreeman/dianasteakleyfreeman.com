import { derived, readable, writable } from "svelte/store";
import { spring } from "svelte/motion";

function createLayoutStore() {
  const activeCell = writable({ x: 0, y: 0 });
  const { set, update: updateActiveCell, subscribe } = activeCell;
  
  
  function incrementRow() {
    return updateActiveCell((cell) => {
      let updated = { y: cell.y + 1, x: cell.x };
      return { ...cell, ...updated };
    });
  }

  function decrementRow() {
    return updateActiveCell((cell) => {
      let updated = { y: cell.y - 1, x: cell.x };
      return { ...cell, ...updated };
    });
  }
  function incrementCol() {
    return updateActiveCell((cell) => {
      let updated = { x: cell.x + 1, y: cell.y };
      return { ...cell, ...updated };
    });
  }

  function decrementCol() {
    return updateActiveCell((cell) => {
      let updated = { x: cell.x - 1, y: cell.y };
      return { ...cell, ...updated };
    });
  }

  function setRow(y) {
    return updateActiveCell((cell) => {
      let updated = { y, x: cell.x };
      return { ...cell, ...updated };
    });
  }
  function setColumn(x) {
    return updateActiveCell((cell) => {
      let updated = { x, y: cell.y };
      return { ...cell, ...updated };
    });
  }

  function setCell(newValues) {
    const { x: newX, y: newY } = newValues;
    setRow(newY);
    setColumn(newX);
  }


  return {
    subscribe,
    incrementRow,
    decrementRow,
    incrementCol,
    decrementCol,
    setCell,
  };
}
const layoutStore = createLayoutStore();


export default layoutStore;
