import { PipePipe } from './pipe/pipe.pipe';

describe('PipePipe', () => {
  it('create an instance', () => {
    const pipe = new PipePipe();
    expect(pipe).toBeTruthy();
  });
});
