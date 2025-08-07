import type { SegmentNodeState } from '../userspace/app/segment-explorer-node';
/**
 * Trie data structure for storing and searching paths
 *
 * This can be used to store app router paths and search for them efficiently.
 * e.g.
 *
 * [trie root]
 *   ├── layout.js
 *   ├── page.js
 *   ├── blog
 *       ├── layout.js
 *       ├── page.js
 *       ├── [slug]
 *          ├── layout.js
 *          ├── page.js
 **/
type TrieNode<Value = string> = {
    value: Value | undefined;
    children: {
        [key: string]: TrieNode<Value> | undefined;
    };
};
type Trie<Value = string> = {
    insert: (value: Value) => void;
    remove: (value: Value) => void;
    getRoot: () => TrieNode<Value>;
};
export type SegmentTrie = Trie<SegmentNodeState>;
export type SegmentTrieNode = TrieNode<SegmentNodeState>;
export declare const insertSegmentNode: (value: SegmentNodeState) => void;
export declare const removeSegmentNode: (value: SegmentNodeState) => void;
export declare function useSegmentTree(): SegmentTrieNode;
export {};
