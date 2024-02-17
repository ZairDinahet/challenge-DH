import ContentRowTop  from './ContentRowTop';
//import NotFound from './NotFound';
//import {Link, Route, Routes} from 'react-router-dom';


function ContentWrapper(props){

    return(
        <>
            {/*<!-- Content Wrapper -->*/}
            {props.isMobileMenuOpen ?  null:
            <div id="content-wrapper">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentRowTop />
                </div>
            </div>
            }
        </>
    )
}
export default ContentWrapper;