export const rules = {
  'enforce-gate-suffix': {
    meta: {
      type: 'problem',
      docs: {
        description: 'Ensure gate components end with Gate.tsx',
        recommended: true
      },
      schema: []
    },
    create(context) {
      const filename = context.getFilename();
      if (
        filename.includes('/components/') &&
        !filename.endsWith('Gate.tsx')
      ) {
        context.report({
          loc: { line: 1, column: 1 },
          message: 'Gate components must end with "Gate.tsx"'
        });
      }
      return {};
    }
  }
};
