import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
// import image from "rollup-plugin-images";
import pkg from "./package.json";
import babel from "rollup-plugin-babel";
const packageJson = require("./package.json");
import url from "@rollup/plugin-url";
import urlAsset from "rollup-plugin-asset-url"
// import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';

export default {
  input: "src/index.tsx",
  output: [
    {
      name: "@TDW/Components",
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      name: "@TDW/Components",
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  globals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  external: [
    "react",
    "react-dom",
    "react-spinners",
    "react-router-dom",
    "react-router",
    "@material-ui/core",
    "@material-ui/icons",
    "react-is",
    "prop-types",
    "react-redux",
    "react-intl",
    "@fontawesome/free-solid-svg-icon",
    "@fontawesome/free-regular-svg-icon",
    "@fontawesome/react-fontawseome",
  ],
  plugins: [
    peerDepsExternal(),
    // image({ include: ['**/*.png', '**/*.jpg'] }),
    //   external({ includeDependencies: true}),
    // image({
    //   output: `D:\work\TDW-Components\build\assets`, // default the root
    //   extensions: /\.(png|jpg|jpeg|gif|svg)$/, // support png|jpg|jpeg|gif|svg, and it's alse the default value
    //   limit: 0,  // default 8192(8k)
    //   exclude: 'node_modules/**'
    // }),
    // url({
    //   limit: 10000,
    //   sourceDir: './src/assets/',
    //   destDir: "./build/assets/",
    //   fileName: '[name][extname]',
    //   include: ["**/*.svg", "**/*.png", "**/*.gif", "**/*.jpg", "**/*.jpeg"],
    // }),
    // importMetaAssets(),
    urlAsset({
      fileName: '[name][extname]',
      output: './build/assets',
      limit: 8 * 1024,
      reserveImportInJs: true // default to true . if true, it will reserve require code
    }),
    babel({
      exclude: "node_modules/**",
    }),
    resolve({ jsnext: true, main: true, browser: true }),
    typescript({
      tsconfig: "./tsconfig.json",
      rollupCommonJSResolveHack: true,
      exclude: ["*/_tests_/*"],
      clean: true,
    }),
    commonjs({
      include: ["node_modules/**"],
      ignoreGlobal: true,
      namedExports: { react: ["createElement", "Component"] },
    }),
  ],
};
