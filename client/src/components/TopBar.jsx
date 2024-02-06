
function TopBar() {

    return (
        <>
            {/* ========== Start ACCESO ========== */}
            <section
                className="bg-slate-50 border-b border-stone-400 items-center justify-between px-12 flex"
                style={{ gridArea: 'search' }}
            >
                {/* ========== Start BUSCADOR ========== */}
                <div className="h-10">
                    <label className="flex items-center h-full">
                        <i className="text-teal-800 bi bi-search text-2xl pr-1"></i>
                        <input
                            type="text"
                            id="search"
                            className="block pl-4 h-full m-0 border-0 focus:bg-stone-50"
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