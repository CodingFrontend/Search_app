export interface AddressTypes {
  place_id: number;
  licence: string;
  osm_type: OsmType;
  osm_id: number;
  boundingbox: string[];
  lat: string;
  lon: string;
  display_name: string;
  class: Class;
  type: Type;
  importance: number;
  icon: string;
}

export enum Class {
  Boundary = "boundary",
  Place = "place",
}

export enum OsmType {
  Node = "node",
  Relation = "relation",
  Way = "way",
}

export enum Type {
  Administrative = "administrative",
  Hamlet = "hamlet",
  Village = "village",
}
