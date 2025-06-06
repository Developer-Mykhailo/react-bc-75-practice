import Grid from "../../Grid/Grid";
import GridItem from "../../GridItem/GridItem";
import PhotosItem from "../PhotosItem/PhotosItem";

const PhotosList = ({ imagesList, openModal }) => {
  return (
    <Grid>
      {imagesList.map(({ src: { medium, large }, id, alt, avg_color }) => {
        return (
          <GridItem key={id}>
            <PhotosItem
              color={avg_color}
              imgSize={medium}
              large={large}
              alt={alt}
              openModal={openModal}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default PhotosList;
