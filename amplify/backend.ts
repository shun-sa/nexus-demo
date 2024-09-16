import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

import { nexusTest } from './functions/nexus-test/resource';

defineBackend({
  auth,
  data,
  nexusTest,
});
