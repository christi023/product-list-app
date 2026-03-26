import type { Product } from "../types/product";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type Props = {
 product: Product;
}

export const ProductCard = ({ product }: Props) => {

  return (
     <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="160"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", p: 2 }}
      />

      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>

        <Typography variant="h6">${product.price}</Typography>
      </CardContent>
    </Card>
  )
}
