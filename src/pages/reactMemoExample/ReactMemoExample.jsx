import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ReactMemoExample() {
    const [memoValue, setMemoValue] = React.useState(0);
    const [normalValue, setNormalValue] = React.useState(0);

    return (
        <Box sx={{ p: 2 }}>
            <Box>
                <Typography>A <strong>react.memo</strong> használatakor a komponens csak akkor renderelődik újra, ha a propjai megváltoznak.</Typography>
            </Box>
            {/* Gomb az érték növelésére */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", mt: 2 }}>
                <Button variant="contained" onClick={() => setMemoValue(memoValue + 1)}>
                    Növeld a MEMO komponens értékét
                </Button>
                <Button variant="contained" color="secondary" onClick={() => setNormalValue(normalValue + 1)}>
                    Növeld a normal komponens értékét
                </Button>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', mt: 2 }}>
                <Typography variant="h6">A MEMO komponens értéke: {memoValue}</Typography>
                <MemoComponent memoValue={memoValue} />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', mt: 2 }}>
                <Typography variant="h6">A normal komponens értéke: {normalValue}</Typography>
                <NormalComponent normalValue={normalValue} />
            </Box>

            <Box>
                <SyntaxHighlighter language="javascript" style={oneDark}>
                    {code}
                </SyntaxHighlighter>
            </Box>
        </Box>
    );
}

// Memoizált komponens (csak akkor renderelődik újra, ha a value változik)
const MemoComponent = React.memo(({ value }) => {
    console.log("MemoComponent render");
    return <Typography sx={{ fontWeight: "bolder" }}>{value}</Typography>;
});

// Normál komponens (minden state változásnál újrarenderelődik)
const NormalComponent = ({ value }) => {
    console.log("NormalComponent render");
    return <Typography sx={{ fontWeight: "bolder" }}>{value}</Typography>;
};

const code = 
`export default function ReactMemoExample() {
    const [memoValue, setMemoValue] = React.useState(0);
    const [normalValue, setNormalValue] = React.useState(0);

    return (
        <Box sx={{ p: 2 }}>
            {/* Gomb az érték növelésére */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", mt: 2 }}>
                <Button variant="contained" onClick={() => setValue(value + 1)}>
                    Növeld a MEMO és a normal értékét
                </Button>
                <Button variant="contained" color="secondary" onClick={() => setCount(count + 1)}>
                    Növeld CSAK a count értékét
                </Button>
            </Box>

             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', mt: 2 }}>
                <Typography variant="h6">A MEMO komponens értéke:</Typography>
                <MemoComponent memoValue={memoValue} />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', mt: 2 }}>
                <Typography variant="h6">A normal komponens értéke:</Typography>
                <NormalComponent normalValue={normalValue} />
            </Box>
        </Box>
    );
}

// Memoizált komponens (csak akkor renderelődik újra, ha a value változik)
const MemoComponent = React.memo(({ value }) => {
    console.log("MemoComponent render");
    return <Typography sx={{ fontWeight: "bolder" }}>{value}</Typography>;
});

// Normál komponens (minden state változásnál újrarenderelődik)
const NormalComponent = ({ value }) => {
    console.log("NormalComponent render");
    return <Typography sx={{ fontWeight: "bolder" }}>{value}</Typography>;
};`