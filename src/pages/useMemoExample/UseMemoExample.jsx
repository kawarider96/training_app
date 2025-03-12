import { TextField, Typography, Box, Button } from "@mui/material";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const UseMemoExample = () => {
    const [count, setCount] = React.useState(0);
    const [input, setInput] = React.useState(0);
  
    const computedValue = React.useMemo(() => {
      console.log("Computing expensive calculation...");
      return input * count;
    }, [input]);
  
    return (
      <Box sx={{p:5}}>
        <Typography>Csak akkor számol újra ha a függőségben megadott érték változik, úgy mint a useEffectnél. Jelen esetben az input, ha csak a count változik akkor nem számolja újra a computed valuet.</Typography>
        <Typography sx={{mt:5}}>useMemo Example</Typography>
        <TextField
          type="number"
          value={input}
          name="input"
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <Typography>Computed Value: {computedValue}</Typography>
        <Button onClick={() => setCount(count + 1)}>Increase Count ({count})</Button>

         <SyntaxHighlighter language="javascript" style={oneDark}>
            {code}
        </SyntaxHighlighter>
      </Box>
    );
};

const code = 
`export const UseMemoExample = () => {
    const [count, setCount] = React.useState(0);
    const [input, setInput] = React.useState(0);
  
    const computedValue = React.useMemo(() => {
      console.log("Computing expensive calculation...");
      return input * count;
    }, [input]);
  
    return (
      <Box sx={{p:5}}>
        <Typography>Csak akkor számol újra ha a függőségben megadott érték változik, úgy mint a useEffectnél. Jelen esetben az input, ha csak a count változik akkor nem számolja újra a computed valuet.</Typography>
        <Typography sx={{mt:5}}>useMemo Example</Typography>
        <TextField
          type="number"
          value={input}
          name="input"
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <Typography>Computed Value: {computedValue}</Typography>
        <Button onClick={() => setCount(count + 1)}>Increase Count ({count})</Button>

      </Box>
    );
};`