export default {
  rules: {
    'enforce-absolute-imports': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow relative imports outside current folder',
          recommended: true
        },
        schema: []
      },
      create(context) {
        return {
          ImportDeclaration(node) {
            const importPath = node.source.value;
            if (
              typeof importPath === 'string' &&
              importPath.startsWith('../')
            ) {
              context.report({
                node,
                message: 'Use absolute imports (e.g., "@/components/...") instead of relative paths.'
              });
            }
          }
        };
      }
    }
  }
};
