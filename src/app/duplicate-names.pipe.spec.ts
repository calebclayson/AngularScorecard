import { DuplicateNamesPipe } from './duplicate-names.pipe';

describe('DuplicateNamesPipe', () => {
  it('create an instance', () => {
    const pipe = new DuplicateNamesPipe();
    expect(pipe).toBeTruthy();
  });
});
