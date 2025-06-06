import Skeleton from "@mui/material/Skeleton";
import Grid from "../../Grid/Grid";
import GridItem from "../../GridItem/GridItem";
const PhotosSkeleton = () => {
  return (
    <Grid>
      {Array(10)
        .fill()
        .map((_, index) => (
          <GridItem key={index}>
            <Skeleton
              variant="rounded"
              width={218}
              height={145}
              animation={"wave"}
            />
          </GridItem>
        ))}
    </Grid>
  );
};

export default PhotosSkeleton;
