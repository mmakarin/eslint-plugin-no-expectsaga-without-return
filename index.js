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
                    "BlockStatement > ExpressionStatement > CallExpression Identifier[name='expectSaga']": node => {
                      	const parents = context.getAncestors().reverse();
                      	let expressionNode;
                      	
                      	for (const parent of parents) {
                          // Skip call chains to the closes ExpressionStatement, return or arrow function
                          if (!['CallExpression', 'MemberExpression'].includes(parent.type)) {
                            if (parent.type === 'ReturnStatement' || parent.type === 'ArrowFunctionExpression') {
                              return;
                            } else if (parent.type === 'ExpressionStatement') {
                              expressionNode = parent;
                            }
                            
                            break;
                          }
                        }
                      	
                        context.report({
                            node,
                            message: "expectSaga without return",
                            fix(fixer) {
                                if (expressionNode) {
                                    return fixer.insertTextBefore(expressionNode, "return ");
                                }
                            }
                        });
                    }
                }
            }
        }
    }
}