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
 * Admin credentials for virtual machine
 *
 */
class VirtualMachineSshCredentials {
  /**
   * Create a VirtualMachineSshCredentials.
   * @member {string} [username] Username of admin account
   * @member {string} [password] Password of admin account
   * @member {string} [publicKeyData] Public key data
   * @member {string} [privateKeyData] Private key data
   */
  constructor() {
  }

  /**
   * Defines the metadata of VirtualMachineSshCredentials
   *
   * @returns {object} metadata of VirtualMachineSshCredentials
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineSshCredentials',
      type: {
        name: 'Composite',
        className: 'VirtualMachineSshCredentials',
        modelProperties: {
          username: {
            required: false,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          },
          password: {
            required: false,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          },
          publicKeyData: {
            required: false,
            serializedName: 'publicKeyData',
            type: {
              name: 'String'
            }
          },
          privateKeyData: {
            required: false,
            serializedName: 'privateKeyData',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineSshCredentials;