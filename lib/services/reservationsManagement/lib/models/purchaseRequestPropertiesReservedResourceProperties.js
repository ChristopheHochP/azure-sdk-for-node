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
 * Properties specific to each reserved resource type. Not required if not
 * applicable.
 *
 */
class PurchaseRequestPropertiesReservedResourceProperties {
  /**
   * Create a PurchaseRequestPropertiesReservedResourceProperties.
   * @property {string} [instanceFlexibility] Possible values include: 'On',
   * 'Off'
   */
  constructor() {
  }

  /**
   * Defines the metadata of PurchaseRequestPropertiesReservedResourceProperties
   *
   * @returns {object} metadata of PurchaseRequestPropertiesReservedResourceProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PurchaseRequestProperties_reservedResourceProperties',
      type: {
        name: 'Composite',
        className: 'PurchaseRequestPropertiesReservedResourceProperties',
        modelProperties: {
          instanceFlexibility: {
            required: false,
            serializedName: 'instanceFlexibility',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PurchaseRequestPropertiesReservedResourceProperties;
