/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type SpaceshipDetailRootQueryVariables = {
    id: string;
};
export type SpaceshipDetailRootQueryResponse = {
    readonly spaceship: {
        readonly id: string | null;
        readonly name: string;
        readonly commander: {
            readonly id: string | null;
            readonly name: string;
        } | null;
    } | null;
};
export type SpaceshipDetailRootQuery = {
    readonly response: SpaceshipDetailRootQueryResponse;
    readonly variables: SpaceshipDetailRootQueryVariables;
};



/*
query SpaceshipDetailRootQuery(
  $id: ID!
) {
  spaceship(id: $id) {
    id
    name
    commander {
      id
      name
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "spaceship",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Spaceship",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "commander",
        "storageKey": null,
        "args": null,
        "concreteType": "Droid",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SpaceshipDetailRootQuery",
    "type": "GetSpaceshipsQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SpaceshipDetailRootQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "SpaceshipDetailRootQuery",
    "id": null,
    "text": "query SpaceshipDetailRootQuery(\n  $id: ID!\n) {\n  spaceship(id: $id) {\n    id\n    name\n    commander {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'af9a676af2ab277a6eef3de1e6758c93';
export default node;
