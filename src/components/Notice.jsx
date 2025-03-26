import Carrusel from "./Carrusel";
export default function Notice(){


    return(
    <main className="bg-black py-8 px-4">
        <section className="flex max-md:flex-wrap-reverse gap-8 items-center lg:w-[67%] m-auto">
            <div className="flex flex-col h-full items-center md:w-1/3 gap-6 xs:gap-12 bg-slate-100 dark:bg-slate-700 p-8 rounded-lg shadow-xl">
               <div className="font-bold text-neutral-900 dark:text-neutral-300 text-3xl sm:text-4xl mb-6">
                 Find the perfect destination
               </div>
               <div className="text-neutral-500 dark:text-neutral-200 text-2xl">
               &quot;Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.&quot;
               </div>
               <button className="hover:bg-blue-600 active:scale-95  transition-all bg-blue-700 text-white shadow-lg font-bold rounded-lg p-3 text-center  max-w-xs w-full text-xl">
               View more
               </button>
            </div>
            <Carrusel></Carrusel>
          
        </section>
    </main>


    );

}