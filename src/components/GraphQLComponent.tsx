import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState } from 'react';
import { GraphQlComponentQueryDocument } from './GraphqlComponent.graphql';
import config from 'temp/config';

const GraphQLConnectedDemo = (props: any): JSX.Element => {
  const [state, setState] = useState();
  const data = props.data;

  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });

  graphQLClient
    .request(GraphQlComponentQueryDocument, {
      path: '{AD498306-5DAF-4F00-AEBA-4D3F3A974419}',
    })
    .then((data) => setState(data as any));

  return data ? (
    <div data-e2e-id="graphql-connected">
      {data.Title}
      {data.SubTitle}
      {JSON.stringify(state)}
    </div>
  ) : (
    <p>.........</p>
  );
};

export default GraphQLConnectedDemo;
