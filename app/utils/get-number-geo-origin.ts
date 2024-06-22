import geoOrigins from "./geo-origins.json";
import { Trie } from "./trie";

interface GeoOrigin {
  city: string;
  areaCode: number;
  state: string;
}

const trie = new Trie<GeoOrigin>();
geoOrigins.forEach((geoOrigin) => trie.insert(geoOrigin.areaCode, geoOrigin));

export function getNumberGeoOrigin(phoneNumber: number): GeoOrigin | undefined {
  return trie.search(phoneNumber);
}
