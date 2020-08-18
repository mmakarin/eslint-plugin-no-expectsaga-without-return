module.exports = {
    configs: {
        recommended: {
            plugins: ['no-expectSaga-without-return'],
            rules: {
                // Error
                "no-expectSaga-without-return/mandatory-return": 2
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
                    "BlockStatement > ExpressionStatement:last-child > CallExpression:has(Identifier[name='expectSaga'])": function (node) {
                        context.report({
                            node,
                            message: "expectSaga without return",
                            fix(fixer) {
                              return fixer.insertTextBefore(node, "return ");
                            }
                        });
                    }
                }
            }
        }
    }
}