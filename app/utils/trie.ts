class TrieNode<Value> {
  children: { [key: string]: TrieNode<Value> } = {};
  value?: Value;
}

export class Trie<Value> {
  root: TrieNode<Value> = new TrieNode();

  insert(areaCode: number, value: Value): void {
    let node = this.root;
    const areaCodeStr = areaCode.toString();

    for (const char of areaCodeStr) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    node.value = value;
  }

  search(phoneNumber: number): Value | undefined {
    let node = this.root;
    let bestMatch: Value | undefined = undefined;
    const phoneStr = phoneNumber.toString();

    for (const char of phoneStr) {
      if (node.children[char]) {
        node = node.children[char];
        if (node.value) {
          bestMatch = node.value;
        }
      } else {
        break;
      }
    }

    return bestMatch;
  }
}
