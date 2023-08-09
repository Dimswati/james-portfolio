
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://james.paulmbatia.com/graphql",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/gql/": {
      preset: "client",
      config: {
        documentMode: 'string',
        avoidOptionals: true,
        dedupeFragments: true
      },
      presetConfig: {
        fragmentMasking: false
      },
      plugins: []
    }
  }
};

export default config;
