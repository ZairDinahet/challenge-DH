import React from 'react';
//import NotFound from './NotFound';
//import {Link, Route, Routes} from 'react-router-dom';


function TopBar(){

    return(
        <>
           {/* ========== Start ACCESO ========== */}
            <section
                class="bg-slate-50 border-b border-stone-400 items-center justify-between px-12 flex"
                style={{gridArea: 'search'}}
            >
                {/* ========== Start BUSCADOR ========== */}
                <div class="h-10">
                <label for="search" class="flex items-center h-full">
                    <i class="text-teal-800 bi bi-search text-2xl pr-1"></i>
                    <input
                    type="text"
                    id="search"
                    class="block pl-4 h-full m-0 border-0 focus:bg-stone-50"
                    />
                </label>
                </div>
                {/* ========== End BUSCADOR ========== */}
            </section>
            {/* ========== End ACCESO ========== */}
        </>
    )
}
export default TopBar;