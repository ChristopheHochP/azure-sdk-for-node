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
 * The parameters that describes a set of credentials that will be used when a
 * run is invoked.
 *
 */
class Credentials {
  /**
   * Create a Credentials.
   * @property {object} [sourceRegistry] Describes the credential parameters
   * for accessing the source registry.
   * @property {string} [sourceRegistry.loginMode] The authentication mode
   * which determines the source registry login scope. The credentials for the
   * source registry
   * will be generated using the given scope. These credentials will be used to
   * login to
   * the source registry during the run. Possible values include: 'None',
   * 'Default'
   * @property {object} [customRegistries] Describes the credential parameters
   * for accessing other custom registries. The key
   * for the dictionary item will be the registry login server
   * (myregistry.azurecr.io) and
   * the value of the item will be the registry credentials for accessing the
   * registry.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Credentials
   *
   * @returns {object} metadata of Credentials
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Credentials',
      type: {
        name: 'Composite',
        className: 'Credentials',
        modelProperties: {
          sourceRegistry: {
            required: false,
            serializedName: 'sourceRegistry',
            type: {
              name: 'Composite',
              className: 'SourceRegistryCredentials'
            }
          },
          customRegistries: {
            required: false,
            serializedName: 'customRegistries',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'CustomRegistryCredentialsElementType',
                  type: {
                    name: 'Composite',
                    className: 'CustomRegistryCredentials'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Credentials;