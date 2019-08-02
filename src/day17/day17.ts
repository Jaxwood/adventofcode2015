import * as _ from 'lodash';

export function day17a(liters: number, containers: number[]): number {
  if (liters === 0) {
    return 1;
  }
  else if (containers.length === 0 || liters < 0) {
    return 0;
  }
  else {
    return day17a(liters - containers[0], containers.slice(1)) + day17a(liters, containers.slice(1))
  }
}