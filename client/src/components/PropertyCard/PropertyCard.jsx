import {useContext} from 'react';
import PropertyCardSkeleton from './PropertyCardSkeleton.jsx';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react-lite';
import { Context } from '../../context.js';

const Property = ({ property }) => {
    const { store } = useContext(Context);

    if (store.propertyStore.isLoading) {
        return <PropertyCardSkeleton />;
    }

    const onClickRemove = () => {};

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={property._id}>
            {property.images.length !== 0 && (
                <Box>
                    {property.images.map((obj, index) => {
                        return (
                            <div key={obj.id}>
                                <Box
                                    component="img"
                                    sx={{
                                        width: '100%',
                                        display: 'block',
                                        overflow: 'hidden',
                                        borderRadius: 3,
                                    }}
                                    src="https://assets-news.housing.com/news/wp-content/uploads/2022/03/15102726/Vastu-for-flats-in-apartments.jpg"
                                ></Box>
                            </div>
                        );
                    })}
                </Box>
            )}
            <div>
                <Box
                    component="img"
                    sx={{
                        display: 'block',
                        overflow: 'hidden',
                        width: '100%',
                        borderRadius: 3,
                    }}
                    src="https://assets-news.housing.com/news/wp-content/uploads/2022/03/15102726/Vastu-for-flats-in-apartments.jpg"
                ></Box>
            </div>
            <Box sx={{ flexGrow: 1, position: 'relative' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ mt: 2 }}>
                        <Typography component="h3"> {property.city}</Typography>
                        <Typography component="h4">
                            {' '}
                            {property.country}
                        </Typography>
                        <Typography component="h5">
                            {' '}
                            {property.price}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};
export default observer(Property)
