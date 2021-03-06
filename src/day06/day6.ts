export function day6a(instructions: string[]): number {
  let grid = initializeGrid();
  const regex = /(turn\son|turn\soff|toggle) (\d+),(\d+) through (\d+),(\d+)/;
  for (const instruction of instructions) {
    const match = instruction.match(regex);
    if (match) {
      grid = adjustLight(grid, match);
    }
  }
  return sum(grid);
}

export function day6b(instructions: string[]): number {
  let grid = initializeGrid();
  const regex = /(turn\son|turn\soff|toggle) (\d+),(\d+) through (\d+),(\d+)/;
  for (const instruction of instructions) {
    const match = instruction.match(regex);
    if (match) {
      grid = adjustBrightness(grid, match);
    }
  }
  return sum(grid);
}

function toInt(num: string) {
  return parseInt(num, 10);
}

function sum(grid: Map<string, number>): number {
  let total = 0;
  for (let x = 0; x < 1000; x++) {
    for (let y = 0; y < 1000; y++) {
      total += grid.get(getKey(x, y)) || 0;
    }
  }
  return total;
}

function adjustLight(
  grid: Map<string, number>,
  matches: string[]
): Map<string, number> {
  const [expression, onOff, xBegin, yBegin, xEnd, yEnd] = matches;
  for (let x = toInt(xBegin); x <= toInt(xEnd); x++) {
    for (let y = toInt(yBegin); y <= toInt(yEnd); y++) {
      if (onOff === 'turn on') {
        grid.set(getKey(x, y), 1);
      } else if (onOff === 'turn off') {
        grid.set(getKey(x, y), 0);
      } else {
        const key = getKey(x, y);
        grid.set(key, grid.get(key) === 1 ? 0 : 1);
      }
    }
  }
  return grid;
}

function adjustBrightness(
  grid: Map<string, number>,
  matches: string[]
): Map<string, number> {
  const [expression, onOff, xBegin, yBegin, xEnd, yEnd] = matches;
  for (let x = toInt(xBegin); x <= toInt(xEnd); x++) {
    for (let y = toInt(yBegin); y <= toInt(yEnd); y++) {
      const key = getKey(x, y);
      const light = grid.get(key) || 0;
      if (onOff === 'turn on') {
        grid.set(getKey(x, y), light + 1);
      } else if (onOff === 'turn off') {
        const adjusted = light === 0 ? 0 : light - 1;
        grid.set(getKey(x, y), adjusted);
      } else {
        grid.set(getKey(x, y), light + 2);
      }
    }
  }
  return grid;
}

function initializeGrid(): Map<string, number> {
  const grid = new Map<string, number>();
  for (let x = 0; x < 1000; x++) {
    for (let y = 0; y < 1000; y++) {
      grid.set(getKey(x, y), 0);
    }
  }
  return grid;
}

function getKey(x: number, y: number): string {
  return `${x},${y}`;
}
