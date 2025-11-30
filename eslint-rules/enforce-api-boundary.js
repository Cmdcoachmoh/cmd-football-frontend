export default {
  rules: {
    'enforce-api-boundary': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Prevent src/api/ files from importing src/components/',
          recommended: true
        },
        schema: []
      },
      create(context) {
        const filename = context.getFilename().replace(/\\/g, '/');
        if (!filename.includes('/src/api/')) return {};

        return {
          ImportDeclaration(node) {
            const importPath = node.source.value;
            if (
              typeof importPath === 'string' &&
              (importPath.startsWith('@/components') || importPath.includes('/components/'))
            ) {
              context.report({
                node,
                message: 'Files in src/api/ must not import from src/components/.'
              });
            }
          }
        };
      }
    }
  }
};
