import { FilterByCatIdPipe } from './filter-by-cat-id.pipe';

describe('FilterByCatIdPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByCatIdPipe();
    expect(pipe).toBeTruthy();
  });
});
