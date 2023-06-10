import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const PropertySkeleton = () => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <div>
                <Skeleton
                    variant="rounded"
                    animation="wave"
                    width="100%"
                    height="100%"
                    display="block"
                    sx={{
                        maxHeight: '350px',
                        minHeight: '200px',
                    }}
                ></Skeleton>
            </div>
            <Box sx={{ flexGrow: 1, position: 'relative' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ mt: 2 }}>
                        <Skeleton
                            variant="rounded"
                            animation="wave"
                            height="20px"
                            width="150px"
                            sx={{ mt: 2 }}
                        ></Skeleton>
                        <Skeleton
                            variant="rounded"
                            animation="wave"
                            height="20px"
                            width="150px"
                            sx={{ mt: 2 }}
                        ></Skeleton>
                        <Skeleton
                            variant="rounded"
                            animation="wave"
                            height="20px"
                            width="150px"
                            sx={{ mt: 2 }}
                        ></Skeleton>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};
export default PropertySkeleton