/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Information about which portion of the file to upload.
 *
 */
class UploadChunkRange {
  /**
   * Create a UploadChunkRange.
   * @property {string} [startPosition] The start position of the portion of
   * the file. It's represented by the number of bytes.
   * @property {string} [endPosition] The end position of the portion of the
   * file. It's represented by the number of bytes.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UploadChunkRange
   *
   * @returns {object} metadata of UploadChunkRange
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UploadChunkRange',
      type: {
        name: 'Composite',
        className: 'UploadChunkRange',
        modelProperties: {
          startPosition: {
            required: false,
            serializedName: 'StartPosition',
            type: {
              name: 'String'
            }
          },
          endPosition: {
            required: false,
            serializedName: 'EndPosition',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UploadChunkRange;
