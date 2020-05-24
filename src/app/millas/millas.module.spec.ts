import { MillasModule } from './millas.module';

describe('MillasModule', () => {
  let millasModule: MillasModule;

  beforeEach(() => {
    millasModule = new MillasModule();
  });

  it('should create an instance', () => {
    expect(millasModule).toBeTruthy();
  });
});
