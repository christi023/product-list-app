

import Container from "@mui/material/Container";
import { useProducts } from "../hooks/useProducts";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import { ProductCard } from "../components/ProductCard";
import { LoadingSkeleton } from "../components/LoadingSkeleton";


export const Home = () => {

  const { data: products = [], isLoading, isError } = useProducts();;
    
      if (isLoading) return <div><LoadingSkeleton /></div>;
      if (isError) return <div>Error loading products.</div>;
    
      return (
      <Container maxWidth="lg">
      <Typography variant="h4" sx={{ my: 3 }}>
       Product Explorer
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid size={{xs:12, sm: 6, md:3}} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
      );

};

export default Home;