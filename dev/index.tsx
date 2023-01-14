import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { backstageDbmlPlugin, BackstageDbmlPage } from '../src/plugin';

createDevApp()
  .registerPlugin(backstageDbmlPlugin)
  .addPage({
    element: <BackstageDbmlPage />,
    title: 'Root Page',
    path: '/backstage-dbml'
  })
  .render();
