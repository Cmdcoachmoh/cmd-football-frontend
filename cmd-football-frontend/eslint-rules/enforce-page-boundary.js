export default {
  rules: {
    'enforce-page-boundary': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Prevent src/pages/ from importing src/api/',
          recommended: true
        },
        schema: []
      },
      create(context) {
        const filename = context.getFilename().replace(/\\/g, '/');
        if (!filename.includes('/src/pages/')) return {};

        return {
          ImportDeclaration(node) {
            const importPath = node.source.value;
            if (
              typeof importPath === 'string' &&
              (importPath.startsWith('@/api') || importPath.includes('/api/'))
            ) {
              context.report({
                node,
                message: 'Files in src/pages/ must not import from src/api/.'
              });
            }
          }
        };
      }
    }
  }
};
