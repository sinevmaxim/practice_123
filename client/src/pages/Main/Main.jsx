import React from 'react';
import { Header, Footer } from '../../layouts/index.js';
import PropertiesGrid from '../../components/PropertiesGrid/PropertiesGrid.jsx';
import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';

const Main = () => {
    return (
        <Box>
            <Header />
            <PropertiesGrid />
            {/* <div className={classes.landingPage}>
                <div className={classes.landingHeader}>
                    <div className={classes.landingHeaderText}>
                        <div className={classes.landingHeaderName}>RENTI</div>
                        <div className={classes.landingHeaderBottomText}>
                            FIND YOUR DREAM APARTMENTS
                        </div>
                    </div>
                    <div className={classes.landingHeaderImgContainer}>
                        <img
                            className={classes.landingHeaderImg}
                            src="./assets/images/bg-image.jpg"
                            alt="Apartments"
                        ></img>
                    </div>
                </div>
            </div> */}
            <Footer />
        </Box>
    );
};
export default observer(Main);
