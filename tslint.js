module.exports = {
	"defaultSeverity": "error",
	"extends": [
		"tslint:recommended",
		"tslint-react",
	],
	"jsRules": true, // true automatically applies any rules that aren't typescript specific
	"rules": {
		"indent": [true, "tabs", 4],
		"interface-name": [true, "never-prefix"], // https://palantir.github.io/tslint/rules/interface-name
		"jsx-alignment": false,
		"jsx-boolean-value": true,
		"jsx-no-lambda": false, // todo - crum: look into this more later
		"jsx-no-multiline-js": false,
		"jsx-space-before-trailing-slash": false,
		"jsx-wrap-multiline": {
			"declaration": "parens",
			"assignment": "parens",
			"return": "parens",
			"arrow": "parens",
			"condition": "ignore",
			"logical": "ignore",
			"prop": "ignore",
		}, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md,
		"no-console": {
			"options": [true, "log"], // throw warning if console.log
			"severity": "warning"
		},
		"quotemark": [true, "single", "jsx-double"], // https://palantir.github.io/tslint/rules/quotemark
		"space-before-function-paren": "always", // https://eslint.org/docs/rules/space-before-function-paren
	},
	"rulesDirectory": [],
};
