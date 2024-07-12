module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "warn",
    "no-var": "error", // var 키워드 금지
    eqeqeq: ["error", "always"], // 항상 ===와 !== 사용하도록 강제
    "require-await": "error", // async 함수에 await 없으면 오류 발생
    "@typescript-eslint/explicit-function-return-type": "off", // 함수의 반환 타입 명시를 강제하지 않음
    "@typescript-eslint/no-explicit-any": "off", // any 타입 사용을 허용
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // 사용되지 않는 변수 경고, 단 _로 시작하는 변수는 제외
    "@typescript-eslint/ban-ts-comment": "off", // @ts-ignore 주석 사용 허용
    "react/prop-types": "off", // PropTypes 사용을 강제하지 않음 (TypeScript를 사용하므로)
    "react/react-in-jsx-scope": "off", // React를 JSX 파일에서 import하지 않아도 됨 (React 17 이상)
  },
};
