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
 * The collection of backups.
 */
class BackupList extends Array {
  /**
   * Create a BackupList.
   * @member {string} [nextLink] The NextLink.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BackupList
   *
   * @returns {object} metadata of BackupList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupList',
      type: {
        name: 'Composite',
        className: 'BackupList',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BackupElementType',
                  type: {
                    name: 'Composite',
                    className: 'Backup'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BackupList;
