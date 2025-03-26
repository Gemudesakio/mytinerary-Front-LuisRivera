export default function Body() {
  return (    
    <>
    {/*body*/}
    <div className='relative'>
    <div className="relative top-0 overflow-hidden w-full h-screen">
      <img 
        className="absolute w-full h-full object-cover object-center brightness-[.65] shadow-lg animatedZoom"
        src="https://mytinerary-mern.vercel.app/img/home.jpg"
        alt="imagen de fondo"
      />
    </div>
    <section className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full px-21justify-center items-center text-neutral-100 text-center max-w-md gap-4 m-auto">
    <h1 className="text-5xl font-bold">My Tineraries</h1>
    <p className="text-2xl italic font-light">&quot;Find your perfect trip, designed by insiders who know and love their cities!&quot;</p>
    <button className=" hover:bg-blue-600 active:scale-95 transition-all text-white shadow-lg font-bold rounded-lg p-3 text-center   text-xl px-8 bg-white/30 animate-pulse hover:animate-none" href="/cities">Explore now!</button>
    </section>
    </div>
    
    </>     
   
   
  );
}
