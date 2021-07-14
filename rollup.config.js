// import typescript from "rollup-plugin-typescript2";
import image from "rollup-plugin-images";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import svg from "rollup-plugin-svg";

const config = {
  input: "src/index.ts",
  external: ["react"],
  plugins: [
    postcss(),
    babel({ exclude: "node_modules/**" }),
    image(),
    terser(),
    svg(),
    
  ],
  output: {
    format: "umd",
    name: "@TDW-Components",
    globals: { react: "React" },
  },
};

export default config;
