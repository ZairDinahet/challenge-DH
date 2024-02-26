const NotFound = () => {
  return (
    <div className="flex w-full flex-col p-7 text-center m-auto">
      <h2 className="text-9xl font-bold m-2 text-stone-950 p-2">
        404 Not Found
      </h2>
      <div className="m-2 p-2">
        <p>Lo sentimos 😥</p>
        <p>La página que buscas no existe.</p>
      </div>
    </div>
  );
};

export default NotFound;
