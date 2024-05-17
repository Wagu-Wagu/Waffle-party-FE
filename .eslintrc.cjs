// .eslintrc.cjs

module.exports = {
  parser: "@typescript-eslint/parser", // ESLint에서 TypeScript 코드를 분석하기 위해 사용
  extends: [
    "eslint:recommended", // ESLint의 기본 권장 설정
    "plugin:react/recommended", // React 관련 권장 설정
    "plugin:@typescript-eslint/recommended", // TypeScript ESLint 플러그인의 권장 설정
    "plugin:prettier/recommended", // Prettier와 ESLint의 통합 설정
  ],
  plugins: [
    "react", // React를 위한 ESLint 플러그인
    "@typescript-eslint", // TypeScript를 위한 ESLint 플러그인
    "prettier", // Prettier를 위한 ESLint 플러그인
  ],
  env: {
    browser: true, // 브라우저 환경을 위한 전역 변수 사용 설정
    es6: true, // ECMAScript 6 기능을 위한 전역 변수 사용 설정
    node: true, // Node.js 환경을 위한 전역 변수 사용 설정
  },
  settings: {
    react: {
      version: "detect", // 설치된 React 버전을 자동으로 감지
    },
  },
  rules: {
    "prettier/prettier": ["error"], // Prettier 규칙을 따르지 않는 코드에 에러 발생
    "no-var": "error", // var 키워드 사용 금지
    "prefer-const": "error", // 변경되지 않는 변수는 const를 사용하도록 강제
    eqeqeq: ["error", "always"], // 항상 ===와 !== 사용하도록 강제
    "require-await": "error", // async 함수에 await 없으면 오류 발생
    "@typescript-eslint/explicit-function-return-type": "off", // 함수의 반환 타입 명시를 강제하지 않음
    "@typescript-eslint/no-explicit-any": "off", // any 타입 사용을 허용
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // 사용되지 않는 변수 경고, 단 _로 시작하는 변수는 제외
    "@typescript-eslint/ban-ts-comment": "off", // @ts-ignore 주석 사용 허용
    "react/prop-types": "off", // PropTypes 사용을 강제하지 않음 (TypeScript를 사용하므로)
    "react/react-in-jsx-scope": "off", // React를 JSX 파일에서 import하지 않아도 됨 (React 17 이상)
    camelcase: "error", // camelCase 네이밍 강제
    "@typescript-eslint/naming-convention": [
      {
        selector: "variable", // 변수에 camelCase 네이밍 강제
        format: ["camelCase"],
      },
      {
        selector: "function", // 일반 함수에 camelCase 네이밍 강제
        format: ["camelCase"],
        custom: {
          regex: "^use[A-Z]", // use로 시작하는 함수명은 camelCase 규칙에서 제외 (hook 함수)
          match: false,
        },
      },
      {
        selector: "function", // 함수형 컴포넌트의 이름을 PascalCase로 강제
        format: ["PascalCase"],
        custom: {
          regex: "^(?!use)[A-Z]", // use로 시작하지 않는 함수명은 PascalCase 강제
          match: true,
        },
      },
      {
        selector: "typeLike", // 타입과 같은 네이밍에 PascalCase 강제
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off", // 모듈 경계에서 반환 타입 명시를 강제하지 않음
    "@typescript-eslint/no-non-null-assertion": "off", // non-null assertion 사용 허용
  },
};
