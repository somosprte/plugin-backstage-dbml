import React from 'react';
import {Grid} from '@material-ui/core';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
  DependencyGraph,
  DependencyGraphTypes
} from '@backstage/core-components';
import { DbmlTable } from '../DbmlTable/DbmlTable';


const nodesMock = [
  { id: 'Users', columns: [{name: 'languages', type: 'string'}]},
  { id: 'Cities', columns: [{name: 'course', type: 'string'}]},
  { id: 'State', columns: [{name: 'fruit', type: 'string'}] },
  { id: 'Countries', columns: [{name: 'bed', type: 'string'}] },
  { id: 'Checkouts', columns: [{name: 'food', type: 'string'}] }
]

const edgesMock = [
  { from: 'Users', to: 'Cities', label: 'hasOne' },
  { from: 'Cities', to: 'Users', label: 'hasMany' },
  { from: 'Cities', to: 'State', label: 'belongs' },
  { from: 'Cities', to: 'Countries', label: 'hasOne' },
  { from: 'Cities', to: 'Checkouts' },
  { from: 'State', to: 'Countries' },
  { from: 'State', to: 'Checkouts' },
  { from: 'Users', to: 'Checkouts' },
  { from: 'Users', to: 'Countries' },
]

export type DbmlDiagramProps = {
  nodes?: {
    id: string,
    columns: {
      name: string,
      type: string
    }[]
  }[],
  edges?: {
    from: string,
    to: string,
    label?: string
  }[],
}

export const DbmlDiagram = ({nodes, edges}: DbmlDiagramProps)  => (
  <Page themeId="tool">
    <Header title="DBML" subtitle="Database Markup Language">
      <HeaderLabel label="Owner" value="PRTE" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="">
        <SupportButton>It is open source, contact God.</SupportButton>
      </ContentHeader>
      <Grid container direction="column" >
       <DependencyGraph 
        nodes={nodes? nodes : nodesMock }  
        edges={edges? edges : edgesMock} 
        direction={DependencyGraphTypes.Direction.LEFT_RIGHT} 
        zoom="enable-on-click"
        paddingX={100}
        paddingY={100}
        renderNode={(item) => (<DbmlTable id={item.node.id} columns={item.node.columns}/>)}
      />
       </Grid>
    </Content>
  </Page>
);
