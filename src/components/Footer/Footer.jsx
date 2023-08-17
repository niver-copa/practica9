import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "black", padding: 2, textAlign: "center" }}>
      <Typography variant="caption" color="white">
        Dev by Diego Granados | Prueba Calificada 09
      </Typography>
    </Box>
  );
}
