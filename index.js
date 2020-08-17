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
                    "BlockStatement > *:not(ReturnStatement):last-child MemberExpression Identifier[name='expectSaga']": function (node) {
                        context.report({
                            node,
                            message: "expectSaga without return",
                            fix(fixer) {
                                var ancestors = context.getAncestors().reverse();
                    
                                for (var parent of ancestors) {
                                    if (parent.type === "ExpressionStatement") {
                                        return fixer.insertTextBefore(parent, "return ");
                                    }
                                }
                            }
                        });
                    }
                }
            }
        }
    }
}