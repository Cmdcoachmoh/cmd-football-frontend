export default {
  rules: {
    'enforce-chart-suffix': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Ensure chart components end with Chart.tsx',
          recommended: true
        },
        schema: []
      },
      create(context) {
        const filename = context.getFilename();
        if (
          filename.includes('/components/') &&
          filename.toLowerCase().includes('chart') &&
          !filename.endsWith('Chart.tsx')
        ) {
          context.report({
            loc: { line: 1, column: 1 },
            message: 'Chart components must end with "Chart.tsx"'
          });
        }
        return {};
      }
    }
  }
};
