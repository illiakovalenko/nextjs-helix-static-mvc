import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState } from 'react';
import { GraphQlComponentQueryDocument } from './GraphQLComponent.graphql';
import config from 'temp/config';
import { StyleguideComponentProps } from 'lib/component-props';

const GraphQLConnectedDemo = (props: StyleguideComponentProps): JSX.Element => {
  const [state, setState] = useState();

  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });

  graphQLClient
    .request(GraphQlComponentQueryDocument, {
      path: props.rendering.dataSource,
    })
    .then((data) => setState(data as any));

  return (
    <div>
      <h3>GraphQLComponent</h3>
      {state ? <div>{JSON.stringify(state)}</div> : <p>.........</p>}
    </div>
  );
};

export default GraphQLConnectedDemo;
