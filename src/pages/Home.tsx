import { Fragment, useEffect, useState } from "react";
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
import type { Category } from "../types/category";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState( searchParams.get("search") || "");
  const [category, setCategory] = useState<Category>((searchParams.get("category") as Category) ||"all");
  const [sort, setSort] = useState(  searchParams.get("sort") || "");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  const { data, isLoading, isError } = useProducts(category, page);

  const productList = data?.products || [];
  const PRODUCTS_PER_PAGE = 8;

  const isAll = category === "all";

  const filteredProducts = productList
    .filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesSearch;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  const productsToShow = isAll
    ? filteredProducts.slice(
        (page - 1) * PRODUCTS_PER_PAGE,
        page * PRODUCTS_PER_PAGE,
      )
    : filteredProducts || [];

  const totalPages = isAll
    ? Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
    : Math.ceil((data?.total || 0) / PRODUCTS_PER_PAGE);

  useEffect(() => {
   const params: Record<string, string> = {};

  if (category !== "all") params.category = category;
  if (search) params.search = search;
  if (sort) params.sort = sort;
  if (page !== 1) params.page = String(page);

  setSearchParams(params);
}, [category, search, sort, page, setSearchParams]);

  if (isLoading)
    return (
      <div>
        <LoadingSkeleton />
      </div>
    );
  if (isError) return <div>Error loading products.</div>;

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
        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              width: "100%",
              maxWidth: 800,
              justifyContent: "center",
            }}
          >
            <SearchBar
              value={search}
              onChange={(value) => {
                setSearch(value);
                setPage(1);
              }}
            />
            <CategoryFilter
              value={category}
              onChange={(value) => {
                setCategory(value);
                setPage(1);
              }}
            />
            <SortDropdown
              value={sort}
              onChange={(value) => {
                setSort(value);
                setPage(1);
              }}
            />
          </Stack>
        </Box>

        {filteredProducts.length === 0 ? (
          <Typography variant="body1" color="text.secondary">
            No products found.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {productsToShow.map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
                <ProductCard product={product} key={product.id} />
              </Grid>
            ))}
          </Grid>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 6,
            pb: 6,
          }}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_e, value) => setPage(value)}
            color="primary"
            variant="outlined"
            shape="rounded"
            size="large"
          />
        </Box>
      </Container>
    </Fragment>
  );
};

export default Home;
