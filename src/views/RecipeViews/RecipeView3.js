import * as React from "react";
import { Stack } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


class RecipeView2 extends React.Component {
  render() {

    return (
      <div>
        <Stack>
          <CardHeader
            title="Pizza with Pineapples"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
            style={{ paddingLeft: 13 }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>

          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                aside for 10 minutes."
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                large plate and set aside, leaving chicken and chorizo in the pan. Add
                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="                Add rice and stir very gently to distribute. Top with artichokes and
                peppers, and cook without stirring, until most of the liquid is absorbed,
                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                mussels, tucking them down into the rice, and cook again without
                stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)."
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Set aside off of the heat to let rest for 10 minutes, and then serve."
                labelPlacement="end"
              />
            </Typography>
          </CardContent>
        </Stack>

      </div >
    );
  }
}

export default RecipeView2;