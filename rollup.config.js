import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import babel from "rollup-plugin-babel";
import urlAsset from "rollup-plugin-asset-url"

export default {
  input: "src/index.tsx",
  output: [
    {
      name: "@TDW/components",
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      name: "@TDW/components",
      file: pkg.module,
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  globals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [
    peerDepsExternal(),
    urlAsset({
      fileName: '[name][extname]',
      output: './build/assets',
      limit: false,
      reserveImportInJs: true 
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
