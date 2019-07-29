import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day16a, day16b } from './day16';

describe('day16', () => {
  describe('a', () => {
    it('should find the correct aunt', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day16a(input.split('\r\n'));
      expect(actual).toBe(40);
    });
  });
  describe('b', () => {
    it('should find the correct aunt', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day16b(input.split('\r\n'));
      expect(actual).toBe(241);
    });
  });
});