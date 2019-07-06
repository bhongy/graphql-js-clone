// @flow strict
import { invariant, defineToStringTag } from '../jsutils';

interface Location {
  +line: number;
  +column: number;
}

export class Source {
  body: string;
  name: string;
  locationOffset: Location;

  constructor(
    body: string,
    name?: string,
    locationOffset?: Location = { line: 1, column: 1 }
  ): void {
    this.body = body;
    this.name = name != null ? name : 'GraphQL request';
    this.locationOffset = locationOffset;
    invariant(
      this.locationOffset.line > 0,
      'line in locationOffset is 1-indexed and must be positive'
    );
    invariant(
      this.locationOffset.column > 0,
      'column in locationOffset is 1-indexed and must be positive'
    );
  }
}

defineToStringTag(Source, 'GraphQL.Source');
