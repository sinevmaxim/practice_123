import { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PropertyCard from '../PropertyCard/PropertyCard.jsx';
import { Context } from '../../context.js';
import { observer } from 'mobx-react-lite';

const PropertiesGrid = () => {
    const { store } = useContext(Context);

    useEffect(() => {
        store.propertyStore.getAllProperties();
    }, []);
    return (
        <Box sx={{ m: 2, display: 'flex', alignItems: 'space-between' }}>
            <Container maxWidth="xl">
                <Grid
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    container
                    spacing={2}
                    rowSpacing={{ xs: 6, md: 4, lg: 2 }}
                    columnSpacing={{ xs: 6, md: 4, lg: 2 }}
                >
                    {(store.propertyStore.isLoading
                        ? [...Array(24)]
                        : store.propertyStore.properties
                    ).map((property, index) => (
                        <PropertyCard
                            key={index}
                            property={property}
                        />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
export default observer(PropertiesGrid);
