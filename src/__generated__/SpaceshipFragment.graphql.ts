/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type SpaceshipFragment = {
    readonly id: string | null;
    readonly name: string;
    readonly commander: {
        readonly id: string | null;
        readonly name: string;
    } | null;
    readonly " $refType": "SpaceshipFragment";
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
  "name": "SpaceshipFragment",
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
(node as any).hash = 'f53c15f08f7af4648f1c84bbdbd07899';
export default node;
