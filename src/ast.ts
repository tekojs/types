export type TekoNode =
  | TextNode
  | ExpressionNode
  | IfNode
  | EachNode
  | ComponentNode
  | SlotNode;

export interface TemplateNode {
  type: 'Template';
  body: TekoNode[];
}

export interface TextNode {
  type: 'Text';
  value: string;
}

export interface ExpressionNode {
  type: 'Expression';
  value: string;
  escaped: boolean;
}

export interface IfNode {
  type: 'If';
  test: string;
  consequent: TekoNode[];
  alternate: TekoNode[];
}

export interface EachNode {
  type: 'Each';
  item: string;
  iterable: string;
  body: TekoNode[];
}

export interface ComponentNode {
  type: 'Component';
  name: string;
  props: string | null;
  children: TekoNode[];
}

export interface SlotNode {
  type: 'Slot';
  name: string;
  children: TekoNode[];
}
