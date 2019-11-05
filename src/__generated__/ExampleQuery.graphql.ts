/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ExampleQueryVariables = {};
export type ExampleQueryResponse = {
    readonly spaceships: ReadonlyArray<{
        readonly id: string | null;
        readonly name: string;
        readonly commander: {
            readonly id: string | null;
            readonly name: string;
        } | null;
    } | null> | null;
};
export type ExampleQuery = {
    readonly response: ExampleQueryResponse;
    readonly variables: ExampleQueryVariables;
};



/*
query ExampleQuery {
  spaceships {
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "spaceships",
    "storageKey": null,
    "args": null,
    "concreteType": "Spaceship",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      (v1/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "commander",
        "storageKey": null,
        "args": null,
        "concreteType": "Droid",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ExampleQuery",
    "type": "GetSpaceshipsQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ExampleQuery",
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ExampleQuery",
    "id": null,
    "text": "query ExampleQuery {\n  spaceships {\n    id\n    name\n    commander {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c784440949f2ed3c00365d16791becb1';
export default node;
