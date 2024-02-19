import { professionsApi } from '../queries/professions';
import { useEffect, useState, useRef } from 'react';

function Professions(props) {
  const [professions, setProfessions] = useState([]);

  async function fetchData() {
    const data = await professionsApi();
    setProfessions(data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const carouselRef = useRef(null);
  const handleScroll = (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      {props.isMobileMenuOpen ? null :
        <div className="p-12 overflow-auto w-full h-full">
          <section>
            <h2 className="text-3xl text-teal-700">Profesiones</h2>
            <div className="lg:relative ">
              <div ref={carouselRef} className="lg:flex lg:overflow-x-hidden lg:scrollbar-hide grid sm:grid-cols-2 sm:gap-4 p-0 transition-all duration-300">
                {professions.map((profession, i) => (
                  <div key={i} className="max-lg:w-full flex-none shrink-0 w-80">
                    <article>
                      <div className="bg-slate-50 h-80 text-center rounded-md hover:shadow-2xl transition-all duration-150 my-5 relative">
                        <img className="block w-full h-full object-cover" src={`./src/assets/img/${profession.image}`} alt={`${profession.name}`} />
                        <h2 className="absolute top-60 left-0 right-0 bg-opacity-75 bg-stone-950 text-white py-2 px-4 rounded-t-md">
                          {profession.name}
                        </h2>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              <button
                className="max-lg:hidden absolute top-1/2 transform -translate-y-1/2 left-0 px-4 py-2 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600 transition-all duration-300"
                onClick={() => handleScroll(-600)}
              >
                <i className="bi bi-chevron-double-left"></i>
              </button>
              <button
                className="max-lg:hidden absolute top-1/2 transform -translate-y-1/2 right-0 px-4 py-2 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600 transition-all duration-300"
                onClick={() => handleScroll(600)}
              >
                <i className="bi bi-chevron-double-right"></i>
              </button>
            </div>
          </section>
        </div>
      }
    </>
  );
}

export default Professions;
