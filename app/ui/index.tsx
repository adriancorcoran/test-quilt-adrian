import React from 'react';
import {AppProvider, Page, Card} from '@shopify/polaris';

function App() {
  return (
    <AppProvider>
      <Page title="Hello">
        <Card sectioned>Hi there</Card>
      </Page>
    </AppProvider>
  );
}

export default App;