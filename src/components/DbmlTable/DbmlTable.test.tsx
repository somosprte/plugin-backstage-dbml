import React from 'react';
import { DbmlTable } from './DbmlTable';
import { ThemeProvider } from '@material-ui/core';
import { lightTheme } from '@backstage/theme';
import { setupServer } from 'msw/node';
import {
  setupRequestMockHandlers,
  renderInTestApp,
} from "@backstage/test-utils";

describe('DbmlTable', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  setupRequestMockHandlers(server);


  it('should render', async () => {
    const rendered = await renderInTestApp(
      <ThemeProvider theme={lightTheme}>
        <DbmlTable id = "tableName" columns = {[{name: "columName", type: "Type"}]} />
      </ThemeProvider>,
    );
    expect(rendered.getByText('tableName')).toBeInTheDocument();
    expect(rendered.getByText('columName')).toBeInTheDocument();
    expect(rendered.getByText('Type')).toBeInTheDocument();
  });
});