/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomeRootSpaceshipsQueryVariables = {};
export type HomeRootSpaceshipsQueryResponse = {
    readonly spaceships: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"SpaceshipsListItem_spaceship">;
    } | null> | null;
};
export type HomeRootSpaceshipsQuery = {
    readonly response: HomeRootSpaceshipsQueryResponse;
    readonly variables: HomeRootSpaceshipsQueryVariables;
};



/*
query HomeRootSpaceshipsQuery {
  spaceships {
    ...SpaceshipsListItem_spaceship
    id
  }
}

fragment SpaceshipsListItem_spaceship on Spaceship {
  id
  name
  commander {
    id
    name
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeRootSpaceshipsQuery",
    "type": "GetSpaceshipsQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "spaceships",
        "storageKey": null,
        "args": null,
        "concreteType": "Spaceship",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SpaceshipsListItem_spaceship",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeRootSpaceshipsQuery",
    "argumentDefinitions": [],
    "selections": [
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
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeRootSpaceshipsQuery",
    "id": null,
    "text": "query HomeRootSpaceshipsQuery {\n  spaceships {\n    ...SpaceshipsListItem_spaceship\n    id\n  }\n}\n\nfragment SpaceshipsListItem_spaceship on Spaceship {\n  id\n  name\n  commander {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '82be8eedfd9701b264f34f88de90f9f1';
export default node;
