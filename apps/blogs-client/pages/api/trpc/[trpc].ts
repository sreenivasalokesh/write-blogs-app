import { createNextApiHandler } from '@trpc/server/adapters/next';
//import { createContext } from '../../../server/trpc/context';

import { appRouter} from '@blogs/trpc/server/routes'


export default createNextApiHandler({
  router: appRouter
});