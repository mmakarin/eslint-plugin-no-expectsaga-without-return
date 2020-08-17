module.exports = {
    configs: {
        recommended: {
            plugins: ['expectSaga-without-return'],
            rules: {
                "expectSaga-without-return/mandatory-return": 1
            }
        }
    },
    rules: {
        'mandatory-return': {
            meta: {
                fixable: 'code'
            },
            create: function(context) {
                return {
                    ExpressionStatement(node) {
                        if (node.expression.type === 'CallExpression' && node.expression.callee.name === 'expectSaga') {
                            context.report({
                            node,
                            message: 'expectSaga without return',
                
                            fix: function(fixer) {
                                return fixer.insertTextBefore(node, 'return ');
                            }
                            });
                        }
                    }
                }
            }
        }
    }
}