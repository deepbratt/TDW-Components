import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";
import image from "rollup-plugin-img";

export default {
  input: "src/index.ts",
  external: [
    "react",
    "react-is",
    "react-dom",
    "prop-types",
    "react-redux",
    "react-router",
    "react-router-dom",
    "@material-ui/core",
    "@material-ui/icons",
  ],
  output: [
    {
      name: "tdw-components",
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    image({
      extensions: /\.(png|jpg|jpeg|gif|svg)$/,
      limit: 10000,
    }),
    external({ includeDependencies: true }),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "*/_tests_/*",
      clean: true,
    }),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement",
          ["isValidElementType"],
        ],
        "node_modules/react-dom/index.js": ["render"],
        "node_modules/react-is/index.js": [
          "ForwardRef",
          "Memo",
          "isFragment",
          "isValidElementType",
        ],
      },
    }),
  ],
};
