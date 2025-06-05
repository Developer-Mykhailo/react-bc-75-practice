import Grid from "../../Grid/Grid";
import GridItem from "../../GridItem/GridItem";
import PhotosItem from "../PhotosItem/PhotosItem";

const PhotosList = ({ imagesList }) => {
  return (
    <Grid>
      {imagesList.map(({ src: { medium }, id, alt, avg_color }) => {
        return (
          <GridItem key={id}>
            <PhotosItem color={avg_color} imgSize={medium} alt={alt} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default PhotosList;
