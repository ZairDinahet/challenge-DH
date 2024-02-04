import React from 'react';
import TopBar from './TopBar';
import ContentRowTop  from './ContentRowTop';
import Footer  from './Footer';
//import NotFound from './NotFound';
import {Link, Route, Routes} from 'react-router-dom';


function ContentWrapper(){

    return(
        <>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default ContentWrapper;