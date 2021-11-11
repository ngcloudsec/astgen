// package: cpg
// file: cpg.proto

import * as jspb from "google-protobuf";

export class PropertyValue extends jspb.Message {
  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  hasBoolValue(): boolean;
  clearBoolValue(): void;
  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  hasIntValue(): boolean;
  clearIntValue(): void;
  getIntValue(): number;
  setIntValue(value: number): void;

  hasLongValue(): boolean;
  clearLongValue(): void;
  getLongValue(): number;
  setLongValue(value: number): void;

  hasFloatValue(): boolean;
  clearFloatValue(): void;
  getFloatValue(): number;
  setFloatValue(value: number): void;

  hasDoubleValue(): boolean;
  clearDoubleValue(): void;
  getDoubleValue(): number;
  setDoubleValue(value: number): void;

  hasStringList(): boolean;
  clearStringList(): void;
  getStringList(): StringList | undefined;
  setStringList(value?: StringList): void;

  hasBoolList(): boolean;
  clearBoolList(): void;
  getBoolList(): BoolList | undefined;
  setBoolList(value?: BoolList): void;

  hasIntList(): boolean;
  clearIntList(): void;
  getIntList(): IntList | undefined;
  setIntList(value?: IntList): void;

  hasLongList(): boolean;
  clearLongList(): void;
  getLongList(): LongList | undefined;
  setLongList(value?: LongList): void;

  hasFloatList(): boolean;
  clearFloatList(): void;
  getFloatList(): FloatList | undefined;
  setFloatList(value?: FloatList): void;

  hasDoubleList(): boolean;
  clearDoubleList(): void;
  getDoubleList(): DoubleList | undefined;
  setDoubleList(value?: DoubleList): void;

  hasContainedRefs(): boolean;
  clearContainedRefs(): void;
  getContainedRefs(): ContainedRefs | undefined;
  setContainedRefs(value?: ContainedRefs): void;

  getValueCase(): PropertyValue.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyValue.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyValue): PropertyValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyValue;
  static deserializeBinaryFromReader(message: PropertyValue, reader: jspb.BinaryReader): PropertyValue;
}

export namespace PropertyValue {
  export type AsObject = {
    stringValue: string,
    boolValue: boolean,
    intValue: number,
    longValue: number,
    floatValue: number,
    doubleValue: number,
    stringList?: StringList.AsObject,
    boolList?: BoolList.AsObject,
    intList?: IntList.AsObject,
    longList?: LongList.AsObject,
    floatList?: FloatList.AsObject,
    doubleList?: DoubleList.AsObject,
    containedRefs?: ContainedRefs.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    STRING_VALUE = 1,
    BOOL_VALUE = 2,
    INT_VALUE = 3,
    LONG_VALUE = 4,
    FLOAT_VALUE = 5,
    DOUBLE_VALUE = 6,
    STRING_LIST = 7,
    BOOL_LIST = 8,
    INT_LIST = 9,
    LONG_LIST = 10,
    FLOAT_LIST = 11,
    DOUBLE_LIST = 12,
    CONTAINED_REFS = 13,
  }
}

export class ContainedRefs extends jspb.Message {
  getLocalName(): string;
  setLocalName(value: string): void;

  clearRefsList(): void;
  getRefsList(): Array<number>;
  setRefsList(value: Array<number>): void;
  addRefs(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainedRefs.AsObject;
  static toObject(includeInstance: boolean, msg: ContainedRefs): ContainedRefs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContainedRefs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainedRefs;
  static deserializeBinaryFromReader(message: ContainedRefs, reader: jspb.BinaryReader): ContainedRefs;
}

export namespace ContainedRefs {
  export type AsObject = {
    localName: string,
    refsList: Array<number>,
  }
}

export class StringList extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  addValues(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringList.AsObject;
  static toObject(includeInstance: boolean, msg: StringList): StringList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringList;
  static deserializeBinaryFromReader(message: StringList, reader: jspb.BinaryReader): StringList;
}

export namespace StringList {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class BoolList extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<boolean>;
  setValuesList(value: Array<boolean>): void;
  addValues(value: boolean, index?: number): boolean;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoolList.AsObject;
  static toObject(includeInstance: boolean, msg: BoolList): BoolList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoolList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoolList;
  static deserializeBinaryFromReader(message: BoolList, reader: jspb.BinaryReader): BoolList;
}

export namespace BoolList {
  export type AsObject = {
    valuesList: Array<boolean>,
  }
}

export class IntList extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): void;
  addValues(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntList.AsObject;
  static toObject(includeInstance: boolean, msg: IntList): IntList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntList;
  static deserializeBinaryFromReader(message: IntList, reader: jspb.BinaryReader): IntList;
}

export namespace IntList {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class LongList extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): void;
  addValues(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongList.AsObject;
  static toObject(includeInstance: boolean, msg: LongList): LongList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LongList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongList;
  static deserializeBinaryFromReader(message: LongList, reader: jspb.BinaryReader): LongList;
}

export namespace LongList {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class FloatList extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): void;
  addValues(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FloatList.AsObject;
  static toObject(includeInstance: boolean, msg: FloatList): FloatList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FloatList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloatList;
  static deserializeBinaryFromReader(message: FloatList, reader: jspb.BinaryReader): FloatList;
}

export namespace FloatList {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class DoubleList extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): void;
  addValues(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoubleList.AsObject;
  static toObject(includeInstance: boolean, msg: DoubleList): DoubleList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoubleList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleList;
  static deserializeBinaryFromReader(message: DoubleList, reader: jspb.BinaryReader): DoubleList;
}

export namespace DoubleList {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class CpgStruct extends jspb.Message {
  clearNodeList(): void;
  getNodeList(): Array<CpgStruct.Node>;
  setNodeList(value: Array<CpgStruct.Node>): void;
  addNode(value?: CpgStruct.Node, index?: number): CpgStruct.Node;

  clearEdgeList(): void;
  getEdgeList(): Array<CpgStruct.Edge>;
  setEdgeList(value: Array<CpgStruct.Edge>): void;
  addEdge(value?: CpgStruct.Edge, index?: number): CpgStruct.Edge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CpgStruct.AsObject;
  static toObject(includeInstance: boolean, msg: CpgStruct): CpgStruct.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CpgStruct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CpgStruct;
  static deserializeBinaryFromReader(message: CpgStruct, reader: jspb.BinaryReader): CpgStruct;
}

export namespace CpgStruct {
  export type AsObject = {
    nodeList: Array<CpgStruct.Node.AsObject>,
    edgeList: Array<CpgStruct.Edge.AsObject>,
  }

  export class Node extends jspb.Message {
    getKey(): number;
    setKey(value: number): void;

    getType(): CpgStruct.Node.NodeTypeMap[keyof CpgStruct.Node.NodeTypeMap];
    setType(value: CpgStruct.Node.NodeTypeMap[keyof CpgStruct.Node.NodeTypeMap]): void;

    clearPropertyList(): void;
    getPropertyList(): Array<CpgStruct.Node.Property>;
    setPropertyList(value: Array<CpgStruct.Node.Property>): void;
    addProperty(value?: CpgStruct.Node.Property, index?: number): CpgStruct.Node.Property;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node.AsObject;
    static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node;
    static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
  }

  export namespace Node {
    export type AsObject = {
      key: number,
      type: CpgStruct.Node.NodeTypeMap[keyof CpgStruct.Node.NodeTypeMap],
      propertyList: Array<CpgStruct.Node.Property.AsObject>,
    }

    export class Property extends jspb.Message {
      getName(): NodePropertyNameMap[keyof NodePropertyNameMap];
      setName(value: NodePropertyNameMap[keyof NodePropertyNameMap]): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): PropertyValue | undefined;
      setValue(value?: PropertyValue): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Property.AsObject;
      static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Property;
      static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
    }

    export namespace Property {
      export type AsObject = {
        name: NodePropertyNameMap[keyof NodePropertyNameMap],
        value?: PropertyValue.AsObject,
      }
    }

    export interface NodeTypeMap {
      UNKNOWN_NODE_TYPE: 0;
      METHOD: 1;
      METHOD_RETURN: 3;
      ANNOTATION: 5;
      ANNOTATION_PARAMETER_ASSIGN: 6;
      ANNOTATION_PARAMETER: 7;
      LITERAL: 8;
      MEMBER: 9;
      ARRAY_INITIALIZER: 14;
      CALL: 15;
      LOCAL: 23;
      TAG: 24;
      LOCATION: 25;
      IDENTIFIER: 27;
      RETURN: 30;
      BLOCK: 31;
      METHOD_INST: 32;
      METHOD_PARAMETER_OUT: 33;
      METHOD_PARAMETER_IN: 34;
      DEPENDENCY: 35;
      PACKAGE_PREFIX: 36;
      FILE: 38;
      META_DATA: 39;
      NAMESPACE: 40;
      NAMESPACE_BLOCK: 41;
      FRAMEWORK: 42;
      FRAMEWORK_DATA: 43;
      UNKNOWN: 44;
      TYPE: 45;
      TYPE_DECL: 46;
      TYPE_PARAMETER: 47;
      TYPE_ARGUMENT: 48;
      ANNOTATION_LITERAL: 49;
      CONFIG_FILE: 50;
      MATCH_INFO: 51;
      SENSITIVE_DATA_TYPE: 52;
      SENSITIVE_MEMBER: 53;
      SENSITIVE_VARIABLE: 54;
      SENSITIVE_REFERENCE: 55;
      BINDING: 146;
      METHOD_SUMMARY: 199;
      SP_ANNOTATION_PARAMETER: 200;
      CALL_SITE: 201;
      SOURCE: 202;
      SINK: 203;
      CALL_CHAIN: 204;
      PROGRAM_POINT: 205;
      VARIABLE_INFO: 206;
      FLOW: 207;
      TAG_NODE_PAIR: 208;
      READ: 209;
      WRITE: 210;
      TRANSFORM: 211;
      IOFLOW: 212;
      TRANSFORMATION: 213;
      FINDING: 214;
      ROUTE: 215;
      SP_BLACKLIST: 216;
      KEY_VALUE_PAIR: 217;
      MODIFIER: 300;
      TAGS: 301;
      IMPLICIT_CALL: 307;
      METHOD_REF: 333;
      CLOSURE_BINDING: 334;
      TYPE_REF: 335;
      CONTROL_STRUCTURE: 339;
      JUMP_TARGET: 340;
      JUMP_LABEL: 341;
      COMMENT: 511;
      DOM_NODE: 600;
      DOM_ATTRIBUTE: 601;
      POST_EXECUTION_CALL: 3071;
      FIELD_IDENTIFIER: 2001081;
    }

    export const NodeType: NodeTypeMap;
  }

  export class Edge extends jspb.Message {
    getSrc(): number;
    setSrc(value: number): void;

    getDst(): number;
    setDst(value: number): void;

    getType(): CpgStruct.Edge.EdgeTypeMap[keyof CpgStruct.Edge.EdgeTypeMap];
    setType(value: CpgStruct.Edge.EdgeTypeMap[keyof CpgStruct.Edge.EdgeTypeMap]): void;

    clearPropertyList(): void;
    getPropertyList(): Array<CpgStruct.Edge.Property>;
    setPropertyList(value: Array<CpgStruct.Edge.Property>): void;
    addProperty(value?: CpgStruct.Edge.Property, index?: number): CpgStruct.Edge.Property;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Edge.AsObject;
    static toObject(includeInstance: boolean, msg: Edge): Edge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Edge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Edge;
    static deserializeBinaryFromReader(message: Edge, reader: jspb.BinaryReader): Edge;
  }

  export namespace Edge {
    export type AsObject = {
      src: number,
      dst: number,
      type: CpgStruct.Edge.EdgeTypeMap[keyof CpgStruct.Edge.EdgeTypeMap],
      propertyList: Array<CpgStruct.Edge.Property.AsObject>,
    }

    export class Property extends jspb.Message {
      getName(): EdgePropertyNameMap[keyof EdgePropertyNameMap];
      setName(value: EdgePropertyNameMap[keyof EdgePropertyNameMap]): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): PropertyValue | undefined;
      setValue(value?: PropertyValue): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Property.AsObject;
      static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Property;
      static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
    }

    export namespace Property {
      export type AsObject = {
        name: EdgePropertyNameMap[keyof EdgePropertyNameMap],
        value?: PropertyValue.AsObject,
      }
    }

    export interface EdgeTypeMap {
      UNKNOWN_EDGE_TYPE: 0;
      AST: 3;
      CALL: 6;
      CONTAINS_NODE: 9;
      REF: 10;
      TAGGED_BY: 11;
      PARAMETER_LINK: 12;
      TAINT_REMOVE: 17;
      ATTACHED_DATA: 18;
      CFG: 19;
      DYNAMIC_TYPE: 20;
      EVAL_TYPE: 21;
      BINDS_TO: 22;
      INHERITS_FROM: 23;
      CONTAINS: 28;
      VTABLE: 30;
      CAPTURE: 40;
      CAPTURED_BY: 41;
      RECEIVER: 55;
      CONDITION: 56;
      REACHING_DEF: 137;
      ALIAS_OF: 138;
      TYPE_DECL_ALIAS: 139;
      BINDS: 155;
      ARGUMENT: 156;
      SOURCE_FILE: 157;
      DOMINATE: 181;
      POST_DOMINATE: 182;
      CDG: 183;
      IS_SENSITIVE_DATA_DESCR_OF: 900;
      IS_SENSITIVE_DATA_DESCR_OF_REF: 901;
      IS_SENSITIVE_DATA_OF_TYPE: 902;
    }

    export const EdgeType: EdgeTypeMap;
  }
}

export class AdditionalNodeProperty extends jspb.Message {
  getNodeId(): number;
  setNodeId(value: number): void;

  hasProperty(): boolean;
  clearProperty(): void;
  getProperty(): CpgStruct.Node.Property | undefined;
  setProperty(value?: CpgStruct.Node.Property): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionalNodeProperty.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionalNodeProperty): AdditionalNodeProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdditionalNodeProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionalNodeProperty;
  static deserializeBinaryFromReader(message: AdditionalNodeProperty, reader: jspb.BinaryReader): AdditionalNodeProperty;
}

export namespace AdditionalNodeProperty {
  export type AsObject = {
    nodeId: number,
    property?: CpgStruct.Node.Property.AsObject,
  }
}

export class AdditionalEdgeProperty extends jspb.Message {
  getEdgeId(): number;
  setEdgeId(value: number): void;

  hasProperty(): boolean;
  clearProperty(): void;
  getProperty(): CpgStruct.Edge.Property | undefined;
  setProperty(value?: CpgStruct.Edge.Property): void;

  getOutNodeKey(): number;
  setOutNodeKey(value: number): void;

  getInNodeKey(): number;
  setInNodeKey(value: number): void;

  getEdgeType(): CpgStruct.Edge.EdgeTypeMap[keyof CpgStruct.Edge.EdgeTypeMap];
  setEdgeType(value: CpgStruct.Edge.EdgeTypeMap[keyof CpgStruct.Edge.EdgeTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionalEdgeProperty.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionalEdgeProperty): AdditionalEdgeProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdditionalEdgeProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionalEdgeProperty;
  static deserializeBinaryFromReader(message: AdditionalEdgeProperty, reader: jspb.BinaryReader): AdditionalEdgeProperty;
}

export namespace AdditionalEdgeProperty {
  export type AsObject = {
    edgeId: number,
    property?: CpgStruct.Edge.Property.AsObject,
    outNodeKey: number,
    inNodeKey: number,
    edgeType: CpgStruct.Edge.EdgeTypeMap[keyof CpgStruct.Edge.EdgeTypeMap],
  }
}

export class CpgOverlay extends jspb.Message {
  clearNodeList(): void;
  getNodeList(): Array<CpgStruct.Node>;
  setNodeList(value: Array<CpgStruct.Node>): void;
  addNode(value?: CpgStruct.Node, index?: number): CpgStruct.Node;

  clearEdgeList(): void;
  getEdgeList(): Array<CpgStruct.Edge>;
  setEdgeList(value: Array<CpgStruct.Edge>): void;
  addEdge(value?: CpgStruct.Edge, index?: number): CpgStruct.Edge;

  clearNodePropertyList(): void;
  getNodePropertyList(): Array<AdditionalNodeProperty>;
  setNodePropertyList(value: Array<AdditionalNodeProperty>): void;
  addNodeProperty(value?: AdditionalNodeProperty, index?: number): AdditionalNodeProperty;

  clearEdgePropertyList(): void;
  getEdgePropertyList(): Array<AdditionalEdgeProperty>;
  setEdgePropertyList(value: Array<AdditionalEdgeProperty>): void;
  addEdgeProperty(value?: AdditionalEdgeProperty, index?: number): AdditionalEdgeProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CpgOverlay.AsObject;
  static toObject(includeInstance: boolean, msg: CpgOverlay): CpgOverlay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CpgOverlay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CpgOverlay;
  static deserializeBinaryFromReader(message: CpgOverlay, reader: jspb.BinaryReader): CpgOverlay;
}

export namespace CpgOverlay {
  export type AsObject = {
    nodeList: Array<CpgStruct.Node.AsObject>,
    edgeList: Array<CpgStruct.Edge.AsObject>,
    nodePropertyList: Array<AdditionalNodeProperty.AsObject>,
    edgePropertyList: Array<AdditionalEdgeProperty.AsObject>,
  }
}

export class DiffGraph extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<DiffGraph.Entry>;
  setEntriesList(value: Array<DiffGraph.Entry>): void;
  addEntries(value?: DiffGraph.Entry, index?: number): DiffGraph.Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiffGraph.AsObject;
  static toObject(includeInstance: boolean, msg: DiffGraph): DiffGraph.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiffGraph, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiffGraph;
  static deserializeBinaryFromReader(message: DiffGraph, reader: jspb.BinaryReader): DiffGraph;
}

export namespace DiffGraph {
  export type AsObject = {
    entriesList: Array<DiffGraph.Entry.AsObject>,
  }

  export class RemoveNode extends jspb.Message {
    getKey(): number;
    setKey(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveNode.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveNode): RemoveNode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveNode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveNode;
    static deserializeBinaryFromReader(message: RemoveNode, reader: jspb.BinaryReader): RemoveNode;
  }

  export namespace RemoveNode {
    export type AsObject = {
      key: number,
    }
  }

  export class RemoveNodeProperty extends jspb.Message {
    getKey(): number;
    setKey(value: number): void;

    getName(): NodePropertyNameMap[keyof NodePropertyNameMap];
    setName(value: NodePropertyNameMap[keyof NodePropertyNameMap]): void;

    getLocalName(): string;
    setLocalName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveNodeProperty.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveNodeProperty): RemoveNodeProperty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveNodeProperty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveNodeProperty;
    static deserializeBinaryFromReader(message: RemoveNodeProperty, reader: jspb.BinaryReader): RemoveNodeProperty;
  }

  export namespace RemoveNodeProperty {
    export type AsObject = {
      key: number,
      name: NodePropertyNameMap[keyof NodePropertyNameMap],
      localName: string,
    }
  }

  export class RemoveEdge extends jspb.Message {
    getOutNodeKey(): number;
    setOutNodeKey(value: number): void;

    getInNodeKey(): number;
    setInNodeKey(value: number): void;

    getEdgeType(): CpgStruct.Edge.EdgeTypeMap[keyof CpgStruct.Edge.EdgeTypeMap];
    setEdgeType(value: CpgStruct.Edge.EdgeTypeMap[keyof CpgStruct.Edge.EdgeTypeMap]): void;

    getPropertieshash(): Uint8Array | string;
    getPropertieshash_asU8(): Uint8Array;
    getPropertieshash_asB64(): string;
    setPropertieshash(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveEdge.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveEdge): RemoveEdge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveEdge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveEdge;
    static deserializeBinaryFromReader(message: RemoveEdge, reader: jspb.BinaryReader): RemoveEdge;
  }

  export namespace RemoveEdge {
    export type AsObject = {
      outNodeKey: number,
      inNodeKey: number,
      edgeType: CpgStruct.Edge.EdgeTypeMap[keyof CpgStruct.Edge.EdgeTypeMap],
      propertieshash: Uint8Array | string,
    }
  }

  export class RemoveEdgeProperty extends jspb.Message {
    getOutNodeKey(): number;
    setOutNodeKey(value: number): void;

    getInNodeKey(): number;
    setInNodeKey(value: number): void;

    getEdgeType(): CpgStruct.Edge.EdgeTypeMap[keyof CpgStruct.Edge.EdgeTypeMap];
    setEdgeType(value: CpgStruct.Edge.EdgeTypeMap[keyof CpgStruct.Edge.EdgeTypeMap]): void;

    getPropertieshash(): Uint8Array | string;
    getPropertieshash_asU8(): Uint8Array;
    getPropertieshash_asB64(): string;
    setPropertieshash(value: Uint8Array | string): void;

    getPropertyName(): EdgePropertyNameMap[keyof EdgePropertyNameMap];
    setPropertyName(value: EdgePropertyNameMap[keyof EdgePropertyNameMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveEdgeProperty.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveEdgeProperty): RemoveEdgeProperty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveEdgeProperty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveEdgeProperty;
    static deserializeBinaryFromReader(message: RemoveEdgeProperty, reader: jspb.BinaryReader): RemoveEdgeProperty;
  }

  export namespace RemoveEdgeProperty {
    export type AsObject = {
      outNodeKey: number,
      inNodeKey: number,
      edgeType: CpgStruct.Edge.EdgeTypeMap[keyof CpgStruct.Edge.EdgeTypeMap],
      propertieshash: Uint8Array | string,
      propertyName: EdgePropertyNameMap[keyof EdgePropertyNameMap],
    }
  }

  export class Entry extends jspb.Message {
    hasNode(): boolean;
    clearNode(): void;
    getNode(): CpgStruct.Node | undefined;
    setNode(value?: CpgStruct.Node): void;

    hasEdge(): boolean;
    clearEdge(): void;
    getEdge(): CpgStruct.Edge | undefined;
    setEdge(value?: CpgStruct.Edge): void;

    hasNodeProperty(): boolean;
    clearNodeProperty(): void;
    getNodeProperty(): AdditionalNodeProperty | undefined;
    setNodeProperty(value?: AdditionalNodeProperty): void;

    hasEdgeProperty(): boolean;
    clearEdgeProperty(): void;
    getEdgeProperty(): AdditionalEdgeProperty | undefined;
    setEdgeProperty(value?: AdditionalEdgeProperty): void;

    hasRemoveNode(): boolean;
    clearRemoveNode(): void;
    getRemoveNode(): DiffGraph.RemoveNode | undefined;
    setRemoveNode(value?: DiffGraph.RemoveNode): void;

    hasRemoveNodeProperty(): boolean;
    clearRemoveNodeProperty(): void;
    getRemoveNodeProperty(): DiffGraph.RemoveNodeProperty | undefined;
    setRemoveNodeProperty(value?: DiffGraph.RemoveNodeProperty): void;

    hasRemoveEdge(): boolean;
    clearRemoveEdge(): void;
    getRemoveEdge(): DiffGraph.RemoveEdge | undefined;
    setRemoveEdge(value?: DiffGraph.RemoveEdge): void;

    hasRemoveEdgeProperty(): boolean;
    clearRemoveEdgeProperty(): void;
    getRemoveEdgeProperty(): DiffGraph.RemoveEdgeProperty | undefined;
    setRemoveEdgeProperty(value?: DiffGraph.RemoveEdgeProperty): void;

    getValueCase(): Entry.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
  }

  export namespace Entry {
    export type AsObject = {
      node?: CpgStruct.Node.AsObject,
      edge?: CpgStruct.Edge.AsObject,
      nodeProperty?: AdditionalNodeProperty.AsObject,
      edgeProperty?: AdditionalEdgeProperty.AsObject,
      removeNode?: DiffGraph.RemoveNode.AsObject,
      removeNodeProperty?: DiffGraph.RemoveNodeProperty.AsObject,
      removeEdge?: DiffGraph.RemoveEdge.AsObject,
      removeEdgeProperty?: DiffGraph.RemoveEdgeProperty.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      NODE = 1,
      EDGE = 2,
      NODE_PROPERTY = 3,
      EDGE_PROPERTY = 4,
      REMOVE_NODE = 5,
      REMOVE_NODE_PROPERTY = 6,
      REMOVE_EDGE = 7,
      REMOVE_EDGE_PROPERTY = 8,
    }
  }
}

export interface NodePropertyNameMap {
  UNKNOWN_NODE_PROPERTY: 0;
  LINE_NUMBER: 2;
  PARSER_TYPE_NAME: 3;
  ORDER: 4;
  NAME: 5;
  FULL_NAME: 6;
  IS_EXTERNAL: 7;
  VALUE: 8;
  COLUMN_NUMBER: 11;
  LINE_NUMBER_END: 12;
  VERSION: 13;
  BINARY_SIGNATURE: 14;
  EVALUATION_STRATEGY: 15;
  COLUMN_NUMBER_END: 16;
  DEPTH_FIRST_ORDER: 17;
  LANGUAGE: 19;
  CONTENT: 20;
  CODE: 21;
  SIGNATURE: 22;
  HAS_MAPPING: 23;
  RESOLVED: 24;
  DISPATCH_TYPE: 25;
  MODIFIER_TYPE: 26;
  CONTROL_STRUCTURE_TYPE: 27;
  ARGUMENT_INDEX: 40;
  CLOSURE_BINDING_ID: 50;
  TYPE_FULL_NAME: 51;
  TYPE_DECL_FULL_NAME: 52;
  INHERITS_FROM_TYPE_FULL_NAME: 53;
  METHOD_FULL_NAME: 54;
  METHOD_INST_FULL_NAME: 55;
  AST_PARENT_TYPE: 56;
  AST_PARENT_FULL_NAME: 57;
  DEPENDENCY_GROUP_ID: 58;
  INTERNAL_FLAGS: 78;
  SYMBOL: 100;
  METHOD_SHORT_NAME: 102;
  PACKAGE_NAME: 103;
  CLASS_NAME: 104;
  NODE_LABEL: 105;
  FILENAME: 106;
  ANNOTATION_NAME: 107;
  ANNOTATION_FULL_NAME: 108;
  IS_STATIC: 110;
  VAR_TYPE: 111;
  EVALUATION_TYPE: 112;
  PARAMETER_INDEX: 113;
  FINGERPRINT: 114;
  SOURCE_TYPE: 115;
  SINK_TYPE: 116;
  CATEGORY: 117;
  OVERLAYS: 118;
  POLICY_DIRECTORIES: 119;
  HASH: 120;
  PATH: 121;
  SPID: 122;
  LITERALS_TO_SINK: 123;
  ARGUMENT_NAME: 130;
  KEY: 131;
  CLASS_SHORT_NAME: 132;
  ALIAS_TYPE_FULL_NAME: 158;
  CLOSURE_ORIGINAL_NAME: 159;
  IS_VARIADIC: 221;
  VARARG_PARAMETER: 222;
  PATTERN: 813;
  CATEGORIES: 814;
  EVAL_TYPE: 815;
  IS_METHOD_NEVER_OVERRIDDEN: 1002;
  DYNAMIC_TYPE_HINT_FULL_NAME: 1591;
  STRUCTURED_FINGERPRINT: 1714;
  USED_IN: 22919;
  CANONICAL_NAME: 2001092;
  CONTAINED_REF: 2007161;
}

export const NodePropertyName: NodePropertyNameMap;

export interface EdgePropertyNameMap {
  UNKNOWN_EDGE_PROPERTY: 0;
  LOCAL_NAME: 6;
  INDEX: 8;
  VARIABLE: 11;
}

export const EdgePropertyName: EdgePropertyNameMap;

export interface ModifierTypesMap {
  UNKNOWN_MODIFIER_TYPE: 0;
  STATIC: 1;
  PUBLIC: 2;
  PROTECTED: 3;
  PRIVATE: 4;
  ABSTRACT: 5;
  NATIVE: 6;
  CONSTRUCTOR: 7;
  VIRTUAL: 8;
  INTERNAL: 9;
}

export const ModifierTypes: ModifierTypesMap;

export interface LANGUAGESMap {
  UNKNOWN_LANGUAGE: 0;
  JAVA: 1;
  JAVASCRIPT: 2;
  GOLANG: 3;
  CSHARP: 4;
  C: 5;
  PYTHON: 6;
  LLVM: 7;
  PHP: 8;
  FUZZY_TEST_LANG: 9;
  GHIDRA: 10;
  KOTLIN: 11;
  NEWC: 12;
  JAVASRC: 13;
}

export const LANGUAGES: LANGUAGESMap;

export interface EvaluationStrategiesMap {
  UNKNOWN_EVALUATION_STRATEGY: 0;
  BY_REFERENCE: 1;
  BY_SHARING: 2;
  BY_VALUE: 3;
}

export const EvaluationStrategies: EvaluationStrategiesMap;

export interface DispatchTypesMap {
  UNKNOWN_DISPATCH_TYPE: 0;
  STATIC_DISPATCH: 1;
  DYNAMIC_DISPATCH: 2;
  INLINED: 3;
}

export const DispatchTypes: DispatchTypesMap;

export interface FRAMEWORKSMap {
  UNKNOWN_FRAMEWORK: 0;
  PLAY: 1;
  GWT: 2;
  SPRING: 3;
  VERTX: 4;
  JSF: 5;
  SERVLET: 6;
  JAXRS: 7;
  SPARK: 8;
  ASP_NET_CORE: 9;
  ASP_NET_WEB_API: 10;
  ASP_NET_MVC: 11;
  JAXWS: 12;
  ASP_NET_WEB_UI: 13;
  JAVA_INTERNAL: 14;
  DROPWIZARD: 15;
  WCF: 16;
}

export const FRAMEWORKS: FRAMEWORKSMap;

export interface CONTROL_STRUCTURE_TYPESMap {
  UNKNOWN_CONTROL_STRUCTURE_TYPE: 0;
  BREAK: 1;
  CONTINUE: 2;
  WHILE: 3;
  DO: 4;
  FOR: 5;
  GOTO: 6;
  IF: 7;
  ELSE: 8;
  SWITCH: 9;
  TRY: 10;
  THROW: 11;
}

export const CONTROL_STRUCTURE_TYPES: CONTROL_STRUCTURE_TYPESMap;

