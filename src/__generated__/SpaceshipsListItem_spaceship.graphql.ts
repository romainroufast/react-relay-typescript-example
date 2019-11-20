/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type SpaceshipsListItem_spaceship = {
    readonly id: string | null;
    readonly name: string;
    readonly commander: {
        readonly id: string | null;
        readonly name: string;
    } | null;
    readonly " $refType": "SpaceshipsListItem_spaceship";
};



const node: ReaderFragment = (function(){
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
  "kind": "Fragment",
  "name": "SpaceshipsListItem_spaceship",
  "type": "Spaceship",
  "metadata": null,
  "argumentDefinitions": [],
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
};
})();
(node as any).hash = 'f90974bf2a07baba1f4090ffdcdfe67b';
export default node;
