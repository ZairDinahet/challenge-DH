import { useRef } from "react"

function TopBar(props) {
    const { handleSearch = () => { } } = props
    const inputRef = useRef()

    const search = () => {
        let title = inputRef.current.value
        handleSearch(title)    
        inputRef.current.value = "";
    }

    return (
        <>
            {/* ========== Start ACCESO ========== */}
            <section
                className="bg-slate-50 border-t border-stone-300 items-center justify-between p-3 flex"
            >
                {/* ========== Start BUSCADOR ========== */}
                <div className="h-10 w-full">
                    <label onBlur={search} className="flex items-center h-full">
                        <input
                            type="text"
                            id="search"
                            className="px-4 h-full w-full rounded-md border border-stone-300 text-stone-950 focus:bg-stone-50 sm:hidden lg:block"
                            ref={inputRef}
                            
                        />
                        <i className="text-teal-700 bi bi-search text-2xl pl-2"></i>
                    </label >
                </div>
                {/* ========== End BUSCADOR ========== */}
            </section>
            {/* ========== End ACCESO ========== */}
        </>
    )
}
export default TopBar;

