
function TopBar() {

    return (
        <>
            {/* ========== Start ACCESO ========== */}
            <section
                className="bg-slate-50 border-t border-stone-300 items-center justify-between p-3 flex"
            >
                {/* ========== Start BUSCADOR ========== */}
                <div className="h-10">
                    <label className="flex items-center h-full">
                        <input
                            type="text"
                            id="search"
                            className="block px-4 h-full m-0 border-0 text-stone-950 focus:bg-stone-50"
                        />
                        <i className="text-teal-700 bi bi-search text-2xl pl-2"></i>
                    </label>
                </div>
                {/* ========== End BUSCADOR ========== */}
            </section>
            {/* ========== End ACCESO ========== */}
        </>
    )
}
export default TopBar;