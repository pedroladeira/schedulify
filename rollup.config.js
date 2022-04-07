import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import commonjs from "@rollup/plugin-commonjs";
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const packageJson = require("./package.json");

export default [
    {
        input: "./example/index.js",
        output: {
            file: "example/dist/bundle.js",
            format: "iife",
            sourcemap: true,
        },
        plugins: [
            nodeResolve({
                extensions: [".js"],
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('development')
            }),
            babel({
                presets: ["@babel/preset-react"],
            }),
            commonjs(),
            serve({
                open: true,
                verbose: true,
                contentBase: ["example", "example"],
                host: "localhost",
                port: 3000,
            }),
            livereload({ watch: "example" }),
        ],
    },
];
