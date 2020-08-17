module.exports = {
    configs: {
        recommended: {
            plugins: ['no-expectSaga-without-return'],
            rules: {
                "no-expectSaga-without-return/mandatory-return": 1
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