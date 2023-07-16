module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module", // Allows for the use of imports
    },
    plugins: [
        "@typescript-eslint",
    ], 
    extends: [
        "airbnb-typescript-prettier",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "import/prefer-default-export": "off",
        "no-console": "warn",
        "max-classes-per-file": "warn",
        "class-methods-use-this": "error",
        "@typescript-eslint/no-explicit-any": [
            "warn",
            {
                ignoreRestArgs: true,
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
            },
        ],
        "comma-dangle": "warn",
    },
};
