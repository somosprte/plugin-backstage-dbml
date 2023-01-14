import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';


export const backstageDbmlPlugin = createPlugin({
  id: 'backstage-dbml',
  routes: {
    root: rootRouteRef,
  },
});

export const BackstageDbmlPage = backstageDbmlPlugin.provide(
  createRoutableExtension({
    name: 'BackstageDbmlPage',
    component: () =>
      import('./components/DbmlDiagram').then(m => m.DbmlDiagram),
    mountPoint: rootRouteRef,
  }),
);
