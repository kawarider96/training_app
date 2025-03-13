import React, { lazy, Suspense } from "react";
import { Box, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// 🔹 A LazyComponent csak akkor töltődik be, amikor szükséges!
const LazyComponent = lazy(() => import("./HeavyComponent"));


export function ReactLazyLoading() {
    return (
      <Box sx={{p:3}}>
        <Typography variant="h5">React Lazy Loading és Suspense Példa</Typography>
        <Typography>Viszonylag egyszerű a logikája. Ha van olyan komponens amit sokáig tart betölteni akkor a Lazy loading technikával egyrészt csak akkor töltjük be amikor arra valóban szükség van, másrészt amíg nem tölt be addig loading animációt is mutathatunk.</Typography>
        
        {/* 🔹 Suspense biztosítja a fallback tartalmat betöltés közben */}
        <Suspense fallback={<p>Loading...</p>}>
          <LazyComponent />
        </Suspense>

        <SyntaxHighlighter language="javascript" style={oneDark}>
            {code}
        </SyntaxHighlighter>
      </Box>
    );
  }


  const code = 
  `import React, { lazy, Suspense } from "react";
import { Box, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// 🔹 A LazyComponent csak akkor töltődik be, amikor szükséges!
const LazyComponent = lazy(() => import("./HeavyComponent"));


export function ReactLazyLoading() {
    return (
      <Box sx={{p:3}}>
        
        {/* 🔹 Suspense biztosítja a fallback tartalmat betöltés közben */}
        <Suspense fallback={<p>Loading...</p>}>
          <LazyComponent />
        </Suspense>

      </Box>
    );
  }`