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
      console.log('DATA:', data);
      setState(data as any);
      return data;
    });

  return (
    <div>
      <h3>GraphQLComponent</h3>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
};

export default GraphQLConnectedDemo;
