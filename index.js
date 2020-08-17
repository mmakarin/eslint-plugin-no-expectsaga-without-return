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
                    "BlockStatement > ExpressionStatement:last-child Identifier[name='expectSaga']": function (node) {
                        let parent = node.parent;
                        
                        while (parent) {
                            if (parent.type === 'ReturnStatement' && parent.parent &&
                                (parent.parent.type === 'BlockStatement' || parent.parent.type === 'ArrowFunctionExpression')) {
                                return;
                            }
                            parent = parent.parent;
                        }

                        context.report({
                            node,
                            message: "expectSaga without return",
                            fix(fixer) {
                                const ancestors = context.getAncestors().reverse();
                    
                                for (let parent of ancestors) {
                                    if (parent.type === "ExpressionStatement" && parent.parent && parent.parent.type === 'BlockStatement') {
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