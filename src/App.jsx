import { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Pagination } from "@mui/material";
import { characters } from "./api/characters";

import CardItem from "./components/Card/CardItem";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// eslint-disable-next-line no-unused-vars
const getAllFunc = characters.getAll;

function App() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [allCharacters, setAllCharacters] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((r) => {
        setCount(r.data.info.pages);
        setAllCharacters(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Navbar />
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container spacing={2} direction="row" sx={{ my: 2 }}>
            {!allCharacters
              ? ""
              : allCharacters.map((c, i) => (
                  <Grid item xs={3} key={i}>
                    <CardItem
                      image={c.image}
                      name={c.name}
                      created={c.created}
                      gender={c.gender}
                      species={c.species}
                      id={c.id}
                    />
                  </Grid>
                ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", paddingY: 4 }}>
            <Pagination count={count} page={page} onChange={handleChange} />
          </Box>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
