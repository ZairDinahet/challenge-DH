import ContentRowTop  from './ContentRowTop';
import Professions  from './Professions';
//import NotFound from './NotFound';
//import {Link, Route, Routes} from 'react-router-dom';


function ContentWrapper(){

    return(
        <>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentRowTop />
                    <Professions />
                </div>
            </div>
        </>
    )
}
export default ContentWrapper;