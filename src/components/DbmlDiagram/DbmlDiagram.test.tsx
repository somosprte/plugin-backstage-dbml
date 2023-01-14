import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { lightTheme } from '@backstage/theme';
import { setupServer } from 'msw/node';
import {
  setupRequestMockHandlers,
  renderInTestApp,
  
} from "@backstage/test-utils";

describe('DbmlDiagram', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  setupRequestMockHandlers(server);


  it('should render', async () => {
    const rendered = await renderInTestApp(
      <ThemeProvider theme={lightTheme}>
        {/* TODO To Learn how test it<DbmlDiagram nodes={nodes} edges={edges}/> */}
        <div>DBML</div>
      </ThemeProvider>,
    )
    expect(rendered.getByText("DBML")).toBeInTheDocument();
  });
})
