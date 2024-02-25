import ContentRowTop  from './ContentRowTop';
//import { useEffect, useState } from 'react'

//import NotFound from './NotFound';
//import {Link, Route, Routes} from 'react-router-dom';


function ContentWrapper(props){

    return(
        <>
            {/*<!-- Content Wrapper -->*/}
            {props.isMobileMenuOpen ?  null:
            <div id="content-wrapper" className='overflow-auto w-full'>
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentRowTop  estado={props.estado} companies={props.companies} applicants={props.applicants}/>
                </div>
                
            </div>
            }
        </>
    )
}
export default ContentWrapper;