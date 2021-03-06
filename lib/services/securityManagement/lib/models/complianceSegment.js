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
 * A segment of a compliance assessment.
 *
 */
class ComplianceSegment {
  /**
   * Create a ComplianceSegment.
   * @member {string} [segmentType] The segment type, e.g. compliant,
   * non-compliance, insufficient coverage, N/A, etc.
   * @member {number} [percentage] The size (%) of the segment.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ComplianceSegment
   *
   * @returns {object} metadata of ComplianceSegment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComplianceSegment',
      type: {
        name: 'Composite',
        className: 'ComplianceSegment',
        modelProperties: {
          segmentType: {
            required: false,
            readOnly: true,
            serializedName: 'segmentType',
            type: {
              name: 'String'
            }
          },
          percentage: {
            required: false,
            readOnly: true,
            serializedName: 'percentage',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ComplianceSegment;
