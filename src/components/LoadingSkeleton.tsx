import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";


export function LoadingSkeleton() {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {[...Array(8)].map((_, index) => (
        <Grid  size={{xs:12, sm: 6, md:3}} key={index}>
          <Card>
            <Skeleton variant="rectangular" height={160} />
            <CardContent>
              <Skeleton height={20} width="80%" />
              <Skeleton height={20} width="40%" />
              <Skeleton height={20} width="60%" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}