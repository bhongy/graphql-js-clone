// @flow strict
import { Source } from '../source';

describe('Source', () => {
  it('defines toString tag', () => {
    const source = new Source('');
    expect(source.toString()).toEqual('[object GraphQL.Source]');
  });

  it('has 1,1 as the default locationOffset', () => {
    const source = new Source('');
    expect(source.locationOffset).toEqual({ line: 1, column: 1 });
  });

  it('uses locationOffset if provided', () => {
    const loc = { line: 10, column: 3 };
    const source = new Source('foo', '-name-', loc);
    expect(source.locationOffset).toEqual(loc);
  });
});
