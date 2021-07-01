import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState } from 'react';
import { GraphQlQueryDocument } from './GraphQLComponent.graphql';
import config from 'temp/config';
import { StyleguideComponentProps } from 'lib/component-props';

const GraphQLConnectedDemo = (props: StyleguideComponentProps): JSX.Element => {
  const [state, setState] = useState({});

  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });

  graphQLClient
    .request(GraphQlQueryDocument, {
      path: props.rendering.dataSource,
    })
    .then((data) => {
      setState(data as any);
      return data;
    });

  return (
    <div
      style={{
        background: '##fdfdfd',
        border: '1px solid black',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <h1 style={{ fontWeight: 'bold', fontSize: '22px' }}>GraphQLComponent</h1>
      <div>{JSON.stringify(state, null, 2)}</div>
    </div>
  );
};

export default GraphQLConnectedDemo;
