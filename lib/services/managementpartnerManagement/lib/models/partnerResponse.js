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

const models = require('./index');

/**
 * this is the management partner operations response
 *
 * @extends models['BaseResource']
 */
class PartnerResponse extends models['BaseResource'] {
  /**
   * Create a PartnerResponse.
   * @member {number} [etag] Type of the partner
   * @member {string} [id] Identifier of the partner
   * @member {string} [name] Name of the partner
   * @member {string} [partnerId] This is the partner id
   * @member {string} [partnerName] This is the partner name
   * @member {string} [tenantId] This is the tenant id.
   * @member {string} [objectId] This is the object id.
   * @member {string} [version] This is the version.
   * @member {date} [updatedTime] This is the DateTime when the partner was
   * updated.
   * @member {date} [createdTime] This is the DateTime when the partner was
   * created.
   * @member {string} [state] This is the partner state. Possible values
   * include: 'Active', 'Deleted'
   * @member {string} [type] Type of resource.
   * "Microsoft.ManagementPartner/partners"
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PartnerResponse
   *
   * @returns {object} metadata of PartnerResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PartnerResponse',
      type: {
        name: 'Composite',
        className: 'PartnerResponse',
        modelProperties: {
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'Number'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          partnerId: {
            required: false,
            serializedName: 'properties.partnerId',
            type: {
              name: 'String'
            }
          },
          partnerName: {
            required: false,
            serializedName: 'properties.partnerName',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            serializedName: 'properties.tenantId',
            type: {
              name: 'String'
            }
          },
          objectId: {
            required: false,
            serializedName: 'properties.objectId',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'properties.version',
            type: {
              name: 'String'
            }
          },
          updatedTime: {
            required: false,
            serializedName: 'properties.updatedTime',
            type: {
              name: 'DateTime'
            }
          },
          createdTime: {
            required: false,
            serializedName: 'properties.createdTime',
            type: {
              name: 'DateTime'
            }
          },
          state: {
            required: false,
            serializedName: 'properties.state',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PartnerResponse;