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
 * The configuration for a redirect routing rule. This object is needed only if
 * the type property of RoutingRule is set to Redirect.
 *
 */
class RedirectConfiguration {
  /**
   * Create a RedirectConfiguration.
   * @property {string} [redirectType] The redirect type the rule will use when
   * redirecting traffic. Possible values include: 'Moved(301)', 'Found(302)',
   * 'TemporaryRedirect(307)', 'PermanentRedirect(308)'
   * @property {string} [destinationProtocol] The protocol of the destination
   * where the traffic is forwarded to. Possible values include:
   * 'MatchRequest', 'Htt', 'Https'
   * @property {string} [destinationHost] If left blank, then we will use the
   * incoming host as the destination host.
   * @property {string} [destinationPath] Path cannot be empty and must start
   * with /.
   * @property {string} [destinationFragment] Fragment is the part of the URL
   * that comes after #. Do not include the #.
   * @property {boolean} [preservePath] Indicates whether the path is
   * preserved.
   * @property {boolean} [preserveQueryString] Indicates whether the query
   * string is preserved.
   * @property {string} [extraQueryString] Any string to be added to the query
   * string in the destination URL. ? and & will be added automatically so do
   * not include them.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RedirectConfiguration
   *
   * @returns {object} metadata of RedirectConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RedirectConfiguration',
      type: {
        name: 'Composite',
        className: 'RedirectConfiguration',
        modelProperties: {
          redirectType: {
            required: false,
            serializedName: 'redirectType',
            type: {
              name: 'String'
            }
          },
          destinationProtocol: {
            required: false,
            serializedName: 'destinationProtocol',
            type: {
              name: 'String'
            }
          },
          destinationHost: {
            required: false,
            serializedName: 'destinationHost',
            type: {
              name: 'String'
            }
          },
          destinationPath: {
            required: false,
            serializedName: 'destinationPath',
            type: {
              name: 'String'
            }
          },
          destinationFragment: {
            required: false,
            serializedName: 'destinationFragment',
            type: {
              name: 'String'
            }
          },
          preservePath: {
            required: false,
            serializedName: 'preservePath',
            type: {
              name: 'Boolean'
            }
          },
          preserveQueryString: {
            required: false,
            serializedName: 'preserveQueryString',
            type: {
              name: 'Boolean'
            }
          },
          extraQueryString: {
            required: false,
            serializedName: 'extraQueryString',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RedirectConfiguration;