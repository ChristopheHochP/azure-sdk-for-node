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
 * BackupStatus request.
 *
 */
class BackupStatusRequest {
  /**
   * Create a BackupStatusRequest.
   * @member {string} [resourceType] Container Type - VM, SQLPaaS, DPM,
   * AzureFileShare. Possible values include: 'Invalid', 'VM', 'FileFolder',
   * 'AzureSqlDb', 'SQLDB', 'Exchange', 'Sharepoint', 'VMwareVM',
   * 'SystemState', 'Client', 'GenericDataSource', 'SQLDataBase',
   * 'AzureFileShare', 'SAPHanaDatabase'
   * @member {string} [resourceId] Entire ARM resource id of the resource
   * @member {string} [poLogicalName] Protectable Item Logical Name
   */
  constructor() {
  }

  /**
   * Defines the metadata of BackupStatusRequest
   *
   * @returns {object} metadata of BackupStatusRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupStatusRequest',
      type: {
        name: 'Composite',
        className: 'BackupStatusRequest',
        modelProperties: {
          resourceType: {
            required: false,
            serializedName: 'resourceType',
            type: {
              name: 'String'
            }
          },
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          poLogicalName: {
            required: false,
            serializedName: 'poLogicalName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BackupStatusRequest;
