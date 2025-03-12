import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const LikeButton = React.memo(({ onLike }) => {
    console.log("LikeButton render");
    return <button onClick={onLike}>Like</button>;
  });
  
export const UseCallbackExample = () => {
    const [count, setCount] = React.useState(0);
    const [likes, setLikes] = React.useState(0);
  
    // useCallback nélkül a LikeButton minden count változásnál újrafüggvényesítődne
    const handleLike = React.useCallback(() => {
      setLikes((prevLikes) => prevLikes + 1);
    }, []);
  
    return (
      <Box sx={{p:3}}>

        <Typography>Ebben a kódban van két useState állapot amiknek a változása ujra rendereli az egész komponenst és a gyermek komponenst azaz a LikeButtont.
            Alapértelmezetten a LikeButton komponens React.memo val van kezelve ezért pusztán a useState-ek változásakor bekövetkező ujra renderelés során a 
            React.memo segítségével kizárjuk az újra renderelésből a LikeButtont. Azthinnénk, hogy faszák vagyunk, de ebben az esetben NEM! Miért?
            Mert itt a LikeButton nak van egy függvénye és a React.memo csak a prop referenciákat figyeli a függvényeket nem. Ezért kell a 
            LikeButtonon lévő függvényt a handleLike-ot useCallback ba tenni mert ez kivédi ezt az esetet is. ugyanaz mint a useMemo csak ez a függvényekre vonatkozik.</Typography>

        <h2>Likes: {likes}</h2>
        <LikeButton onLike={handleLike} />
        
        <h2>Counter: {count}</h2>
        <Button onClick={() => setCount(count + 1)}>Increase Counter</Button>

        <SyntaxHighlighter language="javascript" style={oneDark}>
            {code}
        </SyntaxHighlighter>
      </Box>
    );
  };

  const code = 
`const LikeButton = React.memo(({ onLike }) => {
    console.log("LikeButton render");
    return <button onClick={onLike}>Like</button>;
  });
  
export const UseCallbackExample = () => {
    const [count, setCount] = React.useState(0);
    const [likes, setLikes] = React.useState(0);
  
    // useCallback nélkül a LikeButton minden count változásnál újrafüggvényesítődne
    const handleLike = React.useCallback(() => {
      setLikes((prevLikes) => prevLikes + 1);
    }, []);
  
    return (
      <Box sx={{p:3}}>
        <h2>Likes: {likes}</h2>
        <LikeButton onLike={handleLike} />
        
        <h2>Counter: {count}</h2>
        <Button onClick={() => setCount(count + 1)}>Increase Counter</Button>

      </Box>
    );
};`