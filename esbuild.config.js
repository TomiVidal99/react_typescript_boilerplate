#!/usr/bin/env node

import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["./src/app.jsx"],
    bundle: true,
    outfile: "public/bundle.js",
  },
  { root: "public" }
);
