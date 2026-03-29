import { Fragment, useState } from "react";
import Container from "@mui/material/Container";
import { useProducts } from "../hooks/useProducts";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ProductCard } from "../components/ProductCard";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { SearchBar } from "../components/SearchBar";
import Stack from "@mui/material/Stack";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import Box from "@mui/material/Box";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const { data: products = [], isLoading, isError } = useProducts();

  if (isLoading)
    return (
      <div>
        <LoadingSkeleton />
      </div>
    );
  if (isError) return <div>Error loading products.</div>;

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        category === "all" ? true : product.category === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <Fragment>
      <Container maxWidth="lg">
        <Box sx={{ width: "100%", pt: 6, pb: 4, textAlign: "center" }}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Product Explorer
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              mt: -0.5,
              opacity: 0.8,
            }}
          >
            Browse and filter products
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter value={category} onChange={setCategory} />
          <SortDropdown value={sort} onChange={setSort} />
        </Stack>

        {filteredProducts.length === 0 ? (
          <Typography variant="body1" color="text.secondary">
            No products found.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Fragment>
  );
};

export default Home;
