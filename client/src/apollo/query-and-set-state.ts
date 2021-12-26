import {
  ApolloClient,
  MutationOptions,
  OperationVariables,
  QueryOptions,
} from "@apollo/client";

interface IGraphQLRequest {
  client: ApolloClient<object>;
  action: any;
  setter?: React.Dispatch<React.SetStateAction<any>>;
  variables?: QueryOptions | MutationOptions<any, OperationVariables>;
}

export const queryAndSetState = async ({
  client,
  action,
  setter,
  variables,
}: IGraphQLRequest) => {
  const query = action;
  let res;

  if (variables) {
    const { data } = await client.query({
      query,
      variables,
    });

    res = data[query.definitions[0].name.value];
  } else {
    const { data } = await client.query({
      query,
    });

    res = data[query.definitions[0].name.value];
  }

  if (setter) {
    setter(res);
  }

  return res;
};

export const mutateAndSetState = async ({
  client,
  action,
  setter,
  variables,
}: IGraphQLRequest) => {
  const mutation = action;

  const { data } = await client.mutate({
    mutation,
    variables,
  });

  const res = data[mutation.definitions[0].name.value];

  if (setter) {
    setter(res);
  }

  return res;
};
