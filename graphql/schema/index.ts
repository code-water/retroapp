import { makeSchema } from '@nexus/schema';
import path from 'path';

import * as User from './user';
import * as Post from './post';

export const schema = makeSchema({
  types: [User, Post],
  outputs: {
    typegen: path.join(__dirname, '../../generated/nexus-typegen.ts'),
    schema: path.join(__dirname, '../../generated/schema.graphql'),
  },
  prettierConfig: path.join(__dirname, '../../.prettierrc'),
});

export default schema;
