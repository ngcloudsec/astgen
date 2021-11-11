// source: cpg.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.cpg.CpgOverlay');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cpg.AdditionalEdgeProperty');
goog.require('proto.cpg.AdditionalNodeProperty');
goog.require('proto.cpg.CpgStruct.Edge');
goog.require('proto.cpg.CpgStruct.Node');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cpg.CpgOverlay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cpg.CpgOverlay.repeatedFields_, null);
};
goog.inherits(proto.cpg.CpgOverlay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cpg.CpgOverlay.displayName = 'proto.cpg.CpgOverlay';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cpg.CpgOverlay.repeatedFields_ = [1,2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cpg.CpgOverlay.prototype.toObject = function(opt_includeInstance) {
  return proto.cpg.CpgOverlay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cpg.CpgOverlay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cpg.CpgOverlay.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeList: jspb.Message.toObjectList(msg.getNodeList(),
    proto.cpg.CpgStruct.Node.toObject, includeInstance),
    edgeList: jspb.Message.toObjectList(msg.getEdgeList(),
    proto.cpg.CpgStruct.Edge.toObject, includeInstance),
    nodePropertyList: jspb.Message.toObjectList(msg.getNodePropertyList(),
    proto.cpg.AdditionalNodeProperty.toObject, includeInstance),
    edgePropertyList: jspb.Message.toObjectList(msg.getEdgePropertyList(),
    proto.cpg.AdditionalEdgeProperty.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cpg.CpgOverlay}
 */
proto.cpg.CpgOverlay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cpg.CpgOverlay;
  return proto.cpg.CpgOverlay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cpg.CpgOverlay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cpg.CpgOverlay}
 */
proto.cpg.CpgOverlay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cpg.CpgStruct.Node;
      reader.readMessage(value,proto.cpg.CpgStruct.Node.deserializeBinaryFromReader);
      msg.addNode(value);
      break;
    case 2:
      var value = new proto.cpg.CpgStruct.Edge;
      reader.readMessage(value,proto.cpg.CpgStruct.Edge.deserializeBinaryFromReader);
      msg.addEdge(value);
      break;
    case 3:
      var value = new proto.cpg.AdditionalNodeProperty;
      reader.readMessage(value,proto.cpg.AdditionalNodeProperty.deserializeBinaryFromReader);
      msg.addNodeProperty(value);
      break;
    case 4:
      var value = new proto.cpg.AdditionalEdgeProperty;
      reader.readMessage(value,proto.cpg.AdditionalEdgeProperty.deserializeBinaryFromReader);
      msg.addEdgeProperty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cpg.CpgOverlay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cpg.CpgOverlay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cpg.CpgOverlay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cpg.CpgOverlay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cpg.CpgStruct.Node.serializeBinaryToWriter
    );
  }
  f = message.getEdgeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cpg.CpgStruct.Edge.serializeBinaryToWriter
    );
  }
  f = message.getNodePropertyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cpg.AdditionalNodeProperty.serializeBinaryToWriter
    );
  }
  f = message.getEdgePropertyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.cpg.AdditionalEdgeProperty.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CpgStruct.Node node = 1;
 * @return {!Array<!proto.cpg.CpgStruct.Node>}
 */
proto.cpg.CpgOverlay.prototype.getNodeList = function() {
  return /** @type{!Array<!proto.cpg.CpgStruct.Node>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cpg.CpgStruct.Node, 1));
};


/**
 * @param {!Array<!proto.cpg.CpgStruct.Node>} value
 * @return {!proto.cpg.CpgOverlay} returns this
*/
proto.cpg.CpgOverlay.prototype.setNodeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cpg.CpgStruct.Node=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cpg.CpgStruct.Node}
 */
proto.cpg.CpgOverlay.prototype.addNode = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cpg.CpgStruct.Node, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cpg.CpgOverlay} returns this
 */
proto.cpg.CpgOverlay.prototype.clearNodeList = function() {
  return this.setNodeList([]);
};


/**
 * repeated CpgStruct.Edge edge = 2;
 * @return {!Array<!proto.cpg.CpgStruct.Edge>}
 */
proto.cpg.CpgOverlay.prototype.getEdgeList = function() {
  return /** @type{!Array<!proto.cpg.CpgStruct.Edge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cpg.CpgStruct.Edge, 2));
};


/**
 * @param {!Array<!proto.cpg.CpgStruct.Edge>} value
 * @return {!proto.cpg.CpgOverlay} returns this
*/
proto.cpg.CpgOverlay.prototype.setEdgeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cpg.CpgStruct.Edge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cpg.CpgStruct.Edge}
 */
proto.cpg.CpgOverlay.prototype.addEdge = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cpg.CpgStruct.Edge, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cpg.CpgOverlay} returns this
 */
proto.cpg.CpgOverlay.prototype.clearEdgeList = function() {
  return this.setEdgeList([]);
};


/**
 * repeated AdditionalNodeProperty node_property = 3;
 * @return {!Array<!proto.cpg.AdditionalNodeProperty>}
 */
proto.cpg.CpgOverlay.prototype.getNodePropertyList = function() {
  return /** @type{!Array<!proto.cpg.AdditionalNodeProperty>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cpg.AdditionalNodeProperty, 3));
};


/**
 * @param {!Array<!proto.cpg.AdditionalNodeProperty>} value
 * @return {!proto.cpg.CpgOverlay} returns this
*/
proto.cpg.CpgOverlay.prototype.setNodePropertyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cpg.AdditionalNodeProperty=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cpg.AdditionalNodeProperty}
 */
proto.cpg.CpgOverlay.prototype.addNodeProperty = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cpg.AdditionalNodeProperty, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cpg.CpgOverlay} returns this
 */
proto.cpg.CpgOverlay.prototype.clearNodePropertyList = function() {
  return this.setNodePropertyList([]);
};


/**
 * repeated AdditionalEdgeProperty edge_property = 4;
 * @return {!Array<!proto.cpg.AdditionalEdgeProperty>}
 */
proto.cpg.CpgOverlay.prototype.getEdgePropertyList = function() {
  return /** @type{!Array<!proto.cpg.AdditionalEdgeProperty>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cpg.AdditionalEdgeProperty, 4));
};


/**
 * @param {!Array<!proto.cpg.AdditionalEdgeProperty>} value
 * @return {!proto.cpg.CpgOverlay} returns this
*/
proto.cpg.CpgOverlay.prototype.setEdgePropertyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cpg.AdditionalEdgeProperty=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cpg.AdditionalEdgeProperty}
 */
proto.cpg.CpgOverlay.prototype.addEdgeProperty = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cpg.AdditionalEdgeProperty, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cpg.CpgOverlay} returns this
 */
proto.cpg.CpgOverlay.prototype.clearEdgePropertyList = function() {
  return this.setEdgePropertyList([]);
};


