import {
  __Schema,
  __TypeKind,
  __DirectiveLocation,
  __Type,
  __Field,
} from '@/interfaces/schemaInterface';

export const createMockSchemaObject = (): __Schema => ({
  description: 'dd',
  types: [
    {
      kind: __TypeKind.OBJECT,
      name: 'string',
      description: 'User type',
      fields: [
        {
          name: 'id',
          description: 'User ID',
          args: [],
          type: {
            kind: __TypeKind.SCALAR,
            name: 'ID',
            description: 'Scalar type representing an ID',
            fields: null,
            interfaces: null,
            possibleTypes: null,
            enumValues: null,
            inputFields: null,
            ofType: null,
            specifiedByURL: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ] as unknown as __Field[],
      interfaces: null,
      possibleTypes: null,
      enumValues: null,
      inputFields: null,
      ofType: null,
      specifiedByURL: null,
    } as __Type,
  ],
  queryType: {
    name: 'string',
  },
  mutationType: null,
  subscriptionType: null,
  directives: [
    {
      name: 'fewewws',
      description: null,
      locations: [__DirectiveLocation.QUERY],
      args: [
        {
          name: 'string',
          description: null,
          type: {} as __Type,
          defaultValue: null,
        },
      ],
    },
  ],
});

export const createMockSchemaString = (): __Schema => ({
  description: 'Test mock',
  types: [
    {
      kind: __TypeKind.SCALAR,
      name: 'String',
      description: 'Scalar type representing a string',
      fields: null,
      interfaces: null,
      possibleTypes: null,
      enumValues: null,
      inputFields: null,
      ofType: null,
      specifiedByURL: null,
    },
  ],
  queryType: {
    name: 'string',
  },
  mutationType: null,
  subscriptionType: null,
  directives: [
    {
      name: 'fewewws',
      description: null,
      locations: [__DirectiveLocation.QUERY],
      args: [
        {
          name: 'string',
          description: null,
          type: {} as __Type,
          defaultValue: null,
        },
      ],
    },
  ],
});

export const mockSchema = {
  queryType: {
    name: 'Query',
  },
  mutationType: null,
  subscriptionType: null,
  types: [
    {
      kind: 'OBJECT',
      name: 'Query',
      description: '',
      fields: [
        {
          name: 'character',
          description: 'Get a specific character by ID',
          args: [
            {
              name: 'id',
              description: '',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'ID',
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: 'OBJECT',
            name: 'Character',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'characters',
          description: 'Get the list of all characters',
          args: [
            {
              name: 'page',
              description: '',
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'filter',
              description: '',
              type: {
                kind: 'INPUT_OBJECT',
                name: 'FilterCharacter',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: 'OBJECT',
            name: 'Characters',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'charactersByIds',
          description: 'Get a list of characters selected by ids',
          args: [
            {
              name: 'ids',
              description: '',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'SCALAR',
                      name: 'ID',
                      ofType: null,
                    },
                  },
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'OBJECT',
              name: 'Character',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'location',
          description: 'Get a specific locations by ID',
          args: [
            {
              name: 'id',
              description: '',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'ID',
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: 'OBJECT',
            name: 'Location',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'locations',
          description: 'Get the list of all locations',
          args: [
            {
              name: 'page',
              description: '',
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'filter',
              description: '',
              type: {
                kind: 'INPUT_OBJECT',
                name: 'FilterLocation',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: 'OBJECT',
            name: 'Locations',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'locationsByIds',
          description: 'Get a list of locations selected by ids',
          args: [
            {
              name: 'ids',
              description: '',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'SCALAR',
                      name: 'ID',
                      ofType: null,
                    },
                  },
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'OBJECT',
              name: 'Location',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'episode',
          description: 'Get a specific episode by ID',
          args: [
            {
              name: 'id',
              description: '',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'ID',
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: 'OBJECT',
            name: 'Episode',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'episodes',
          description: 'Get the list of all episodes',
          args: [
            {
              name: 'page',
              description: '',
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: 'filter',
              description: '',
              type: {
                kind: 'INPUT_OBJECT',
                name: 'FilterEpisode',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: 'OBJECT',
            name: 'Episodes',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'episodesByIds',
          description: 'Get a list of episodes selected by ids',
          args: [
            {
              name: 'ids',
              description: '',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'SCALAR',
                      name: 'ID',
                      ofType: null,
                    },
                  },
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'OBJECT',
              name: 'Episode',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'SCALAR',
      name: 'ID',
      description:
        'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: 'Character',
      description: '',
      fields: [
        {
          name: 'id',
          description: 'The id of the character.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'ID',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'name',
          description: 'The name of the character.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'status',
          description: "The status of the character ('Alive', 'Dead' or 'unknown').",
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'species',
          description: 'The species of the character.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'type',
          description: 'The type or subspecies of the character.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'gender',
          description: "The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').",
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'origin',
          description: "The character's origin location",
          args: [],
          type: {
            kind: 'OBJECT',
            name: 'Location',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'location',
          description: "The character's last known location",
          args: [],
          type: {
            kind: 'OBJECT',
            name: 'Location',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'image',
          description:
            "Link to the character's image.\nAll images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.",
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'episode',
          description: 'Episodes in which this character appeared.',
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: 'Episode',
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'created',
          description: 'Time at which the character was created in the database.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'SCALAR',
      name: 'String',
      description:
        'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: 'Location',
      description: '',
      fields: [
        {
          name: 'id',
          description: 'The id of the location.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'ID',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'name',
          description: 'The name of the location.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'type',
          description: 'The type of the location.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'dimension',
          description: 'The dimension in which the location is located.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'residents',
          description: 'List of characters who have been last seen in the location.',
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: 'Character',
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'created',
          description: 'Time at which the location was created in the database.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: 'Episode',
      description: '',
      fields: [
        {
          name: 'id',
          description: 'The id of the episode.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'ID',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'name',
          description: 'The name of the episode.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'air_date',
          description: 'The air date of the episode.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'episode',
          description: 'The code of the episode.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'characters',
          description: 'List of characters who have been seen in the episode.',
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: 'Character',
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'created',
          description: 'Time at which the episode was created in the database.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'SCALAR',
      name: 'Int',
      description:
        'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'INPUT_OBJECT',
      name: 'FilterCharacter',
      description: '',
      fields: null,
      inputFields: [
        {
          name: 'name',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'status',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'species',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'type',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'gender',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          defaultValue: null,
        },
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: 'Characters',
      description: '',
      fields: [
        {
          name: 'info',
          description: '',
          args: [],
          type: {
            kind: 'OBJECT',
            name: 'Info',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'results',
          description: '',
          args: [],
          type: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'OBJECT',
              name: 'Character',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: 'Info',
      description: '',
      fields: [
        {
          name: 'count',
          description: 'The length of the response.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'pages',
          description: 'The amount of pages.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'next',
          description: 'Number of the next page (if it exists)',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'prev',
          description: 'Number of the previous page (if it exists)',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'INPUT_OBJECT',
      name: 'FilterLocation',
      description: '',
      fields: null,
      inputFields: [
        {
          name: 'name',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'type',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'dimension',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          defaultValue: null,
        },
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: 'Locations',
      description: '',
      fields: [
        {
          name: 'info',
          description: '',
          args: [],
          type: {
            kind: 'OBJECT',
            name: 'Info',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'results',
          description: '',
          args: [],
          type: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'OBJECT',
              name: 'Location',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'INPUT_OBJECT',
      name: 'FilterEpisode',
      description: '',
      fields: null,
      inputFields: [
        {
          name: 'name',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'episode',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          defaultValue: null,
        },
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: 'Episodes',
      description: '',
      fields: [
        {
          name: 'info',
          description: '',
          args: [],
          type: {
            kind: 'OBJECT',
            name: 'Info',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'results',
          description: '',
          args: [],
          type: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'OBJECT',
              name: 'Episode',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: '__Schema',
      description:
        'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
      fields: [
        {
          name: 'types',
          description: 'A list of all types supported by this server.',
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__Type',
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'queryType',
          description: 'The type that query operations will be rooted at.',
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'OBJECT',
              name: '__Type',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'mutationType',
          description:
            'If this server supports mutation, the type that mutation operations will be rooted at.',
          args: [],
          type: {
            kind: 'OBJECT',
            name: '__Type',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'subscriptionType',
          description:
            'If this server support subscription, the type that subscription operations will be rooted at.',
          args: [],
          type: {
            kind: 'OBJECT',
            name: '__Type',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'directives',
          description: 'A list of all directives supported by this server.',
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__Directive',
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: '__Type',
      description:
        'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
      fields: [
        {
          name: 'kind',
          description: null,
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'ENUM',
              name: '__TypeKind',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'name',
          description: null,
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'description',
          description: null,
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'fields',
          description: null,
          args: [
            {
              name: 'includeDeprecated',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
              defaultValue: 'false',
            },
          ],
          type: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: '__Field',
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'interfaces',
          description: null,
          args: [],
          type: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'possibleTypes',
          description: null,
          args: [],
          type: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'enumValues',
          description: null,
          args: [
            {
              name: 'includeDeprecated',
              description: null,
              type: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
              defaultValue: 'false',
            },
          ],
          type: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: '__EnumValue',
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'inputFields',
          description: null,
          args: [],
          type: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: '__InputValue',
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'ofType',
          description: null,
          args: [],
          type: {
            kind: 'OBJECT',
            name: '__Type',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'ENUM',
      name: '__TypeKind',
      description: 'An enum describing what kind of type a given `__Type` is.',
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: 'SCALAR',
          description: 'Indicates this type is a scalar.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'OBJECT',
          description:
            'Indicates this type is an object. `fields` and `interfaces` are valid fields.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'INTERFACE',
          description:
            'Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'UNION',
          description: 'Indicates this type is a union. `possibleTypes` is a valid field.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'ENUM',
          description: 'Indicates this type is an enum. `enumValues` is a valid field.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'INPUT_OBJECT',
          description: 'Indicates this type is an input object. `inputFields` is a valid field.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'LIST',
          description: 'Indicates this type is a list. `ofType` is a valid field.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'NON_NULL',
          description: 'Indicates this type is a non-null. `ofType` is a valid field.',
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      possibleTypes: null,
    },
    {
      kind: 'SCALAR',
      name: 'Boolean',
      description: 'The `Boolean` scalar type represents `true` or `false`.',
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: '__Field',
      description:
        'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
      fields: [
        {
          name: 'name',
          description: null,
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'description',
          description: null,
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'args',
          description: null,
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__InputValue',
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'type',
          description: null,
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'OBJECT',
              name: '__Type',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'isDeprecated',
          description: null,
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'deprecationReason',
          description: null,
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: '__InputValue',
      description:
        'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
      fields: [
        {
          name: 'name',
          description: null,
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'description',
          description: null,
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'type',
          description: null,
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'OBJECT',
              name: '__Type',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'defaultValue',
          description:
            'A GraphQL-formatted string representing the default value for this input value.',
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: '__EnumValue',
      description:
        'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
      fields: [
        {
          name: 'name',
          description: null,
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'description',
          description: null,
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'isDeprecated',
          description: null,
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'deprecationReason',
          description: null,
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'OBJECT',
      name: '__Directive',
      description:
        "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
      fields: [
        {
          name: 'name',
          description: null,
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'description',
          description: null,
          args: [],
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'locations',
          description: null,
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'ENUM',
                  name: '__DirectiveLocation',
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'args',
          description: null,
          args: [],
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__InputValue',
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: 'ENUM',
      name: '__DirectiveLocation',
      description:
        'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: 'QUERY',
          description: 'Location adjacent to a query operation.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'MUTATION',
          description: 'Location adjacent to a mutation operation.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'SUBSCRIPTION',
          description: 'Location adjacent to a subscription operation.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'FIELD',
          description: 'Location adjacent to a field.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'FRAGMENT_DEFINITION',
          description: 'Location adjacent to a fragment definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'FRAGMENT_SPREAD',
          description: 'Location adjacent to a fragment spread.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'INLINE_FRAGMENT',
          description: 'Location adjacent to an inline fragment.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'VARIABLE_DEFINITION',
          description: 'Location adjacent to a variable definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'SCHEMA',
          description: 'Location adjacent to a schema definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'SCALAR',
          description: 'Location adjacent to a scalar definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'OBJECT',
          description: 'Location adjacent to an object type definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'FIELD_DEFINITION',
          description: 'Location adjacent to a field definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'ARGUMENT_DEFINITION',
          description: 'Location adjacent to an argument definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'INTERFACE',
          description: 'Location adjacent to an interface definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'UNION',
          description: 'Location adjacent to a union definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'ENUM',
          description: 'Location adjacent to an enum definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'ENUM_VALUE',
          description: 'Location adjacent to an enum value definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'INPUT_OBJECT',
          description: 'Location adjacent to an input object type definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'INPUT_FIELD_DEFINITION',
          description: 'Location adjacent to an input object field definition.',
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      possibleTypes: null,
    },
    {
      kind: 'ENUM',
      name: 'CacheControlScope',
      description: '',
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: 'PUBLIC',
          description: '',
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: 'PRIVATE',
          description: '',
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      possibleTypes: null,
    },
    {
      kind: 'SCALAR',
      name: 'Upload',
      description: 'The `Upload` scalar type represents a file upload.',
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
  ],
  directives: [
    {
      name: 'cacheControl',
      description: '',
      locations: ['FIELD_DEFINITION', 'OBJECT', 'INTERFACE'],
      args: [
        {
          name: 'maxAge',
          description: '',
          type: {
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'scope',
          description: '',
          type: {
            kind: 'ENUM',
            name: 'CacheControlScope',
            ofType: null,
          },
          defaultValue: null,
        },
      ],
    },
    {
      name: 'skip',
      description:
        'Directs the executor to skip this field or fragment when the `if` argument is true.',
      locations: ['FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT'],
      args: [
        {
          name: 'if',
          description: 'Skipped when true.',
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
          },
          defaultValue: null,
        },
      ],
    },
    {
      name: 'include',
      description:
        'Directs the executor to include this field or fragment only when the `if` argument is true.',
      locations: ['FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT'],
      args: [
        {
          name: 'if',
          description: 'Included when true.',
          type: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null,
            },
          },
          defaultValue: null,
        },
      ],
    },
    {
      name: 'deprecated',
      description: 'Marks an element of a GraphQL schema as no longer supported.',
      locations: ['FIELD_DEFINITION', 'ENUM_VALUE'],
      args: [
        {
          name: 'reason',
          description:
            'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/).',
          type: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
          defaultValue: '"No longer supported"',
        },
      ],
    },
  ],
} as unknown as __Schema;
