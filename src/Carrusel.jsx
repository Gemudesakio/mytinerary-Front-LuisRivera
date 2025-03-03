import { useState } from "react";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart, FaMinus } from "react-icons/fa";
export default function Carrusel(){
 
    const images = [
        {
          src: "https://cheznonoborabora.com/en/static.cheznonoborabora.com/images/chez-nono-bora-bora-lodge-accommodations/villa/north-villa/gallery/north-villa-gazebo-bora-bora-matira-beach.jpg",
          title: "Matira Beach",
          likes: 33,
        },
        {
          src: "https://i.im.ge/2022/09/06/OZ78aa.veligandu-island-beach-of-the-maldives-795x360.jpg",
          title: "Veligandu Island Beach",
          likes: 28,
        },
        {
          src: "https://www.southluangwasafaris.com/wp-content/uploads/2018/04/livadv_2013-03-207.x89638.jpg",
          title: "Adventure Time",
          likes: 28,
        },
        {
          src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/af/19/85/tsunami-monument.jpg?w=1200&h=-1&s=1",
          title: "Tsunami Monument",
          likes: 27,
        },
        {
          src: "https://images-ext-1.discordapp.net/external/ENkeAeE0mgvgdWCKzVzYC2NQh-yhcC2FnBNkEqlzMpA/https/www.gototravelguides.net/images/photos/borabora_P1000780.jpg?width=901&height=676",
          title: "Mount Otemanu",
          likes: 27,
        },
        {
          src: "https://i.im.ge/2022/08/31/OERMl1.salahCitadelCairoCity.png",
          title: "Citadel Tour",
          likes: 26,
        },
        {
          src: "https://gpjs3bucket.s3.amazonaws.com/wp-content/uploads/2018/08/26141032/GPJNew_Zambia_PP_Crowds-1_Web.jpg",
          title: "Traditional",
          likes: 25,
        },
        {
          src: "https://dam.ngenespanol.com/wp-content/uploads/2021/04/GettyImages-139812035.jpg",
          title: "National Park Roraima",
          likes: 24,
        },
        {
          src: "https://d18sx48tl6nre5.cloudfront.net/webp_md_28ddbaa5efa991d343efc7c1d602432d.webp",
          title: "Through the Fields",
          likes: 13,
        },
        {
          src: "https://www.meteorologiaenred.com/wp-content/uploads/2020/04/Vistas-del-monte.jpg",
          title: "Mount Fuji",
          likes: 11,
        },
        {
          src: "https://gadsventure.com/wp-content/uploads/2019/12/Webp.net-resizeimage-2019-12-18T144431.703-800x600.jpg",
          title: "Ubud",
          likes: 10,
        },
        {
          src: "https://www.enkosiafrica.com/wp-content/uploads/2018/01/enkosi-africa-safari-zambia-lower-zambezi-sausage-tree-camp-.jpg",
          title: "Fauna and Flora",
          likes: 8,
        }
      ];
  
    const [index,setIndex] = useState(0)
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
    
    /*controlamos la responsividad del carrusel y la cantidad de items debajo de las imagenes*/
    const VectorEspacios = isSmallScreen? Array.from({ length:images.length }): Array.from({ length: Math.ceil(images.length / 4) })
    
    /*Usamos UseEffect para cxrear un intervalo que cambiara index cada5 segundos, este se volvera a montar si vectorEspacios cambia su tamanio*/
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % VectorEspacios.length);
      }, 5000);
    
      return () => clearInterval(interval);
    }, [VectorEspacios.length])
    

    useEffect(() => {
      const handleResize = () => {
        const newIsSmallScreen = window.innerWidth < 640;
        if (newIsSmallScreen !== isSmallScreen) {
          setIndex(0); // Reinicia el índice al cambiar de tamaño
        }
        setIsSmallScreen(newIsSmallScreen);
      };
    
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [isSmallScreen]);
    

    const prevSlide = ()=>{
      setIndex((prevIndex)=>(prevIndex === 0? VectorEspacios.length - 1 : prevIndex-1 ))
    }
    const nextSlide = ()=>{
    setIndex((prevIndex)=>(prevIndex+1)%VectorEspacios.length)
    }
    function changeIndex(idx){
      setIndex(idx)
    }
    return(
    <>
         <div className="flex flex-col justify-between grow  items-center relative gap-6 md:w-2/3">
            <h1 className="text-center font-bold text-3xl text-neutral-100">Popular Tineraries</h1>
            {/* paso 1: se crea un div que oculte el contenido desbordado*/}
            <div className="flex justify-center items-center relative overflow-hidden ">
                {/* paso 2: se crea un div que puntara las imagenes en modo horizontal, una despues de la otra*/}
                        {/* Este div debe tener la propiedad de trasladar las imagenes con respecto a su indice en el vector*/}
                <div className="flex aspect-video duration-300 " style={{ transform: `translateX(-${index* 100}%)` }}>  

                  {   
                  isSmallScreen?  
                  /* Segmento de codigo que pinta 1 imagen por div, para pantallas de Pequeñas*/    
                      images.map((image,idx)=>(
                        <div key={idx} className="flex relative  min-w-full text-neutral-100 shadow-lg overflow-hidden rounded-2xl">
                          <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                          <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-lg flex items-center gap-2">
                            <FaHeart className="text-white" />
                            <span className="text-white text-lg">{image.likes}</span>
                          </div>
                          <h2 className="absolute bottom-0 left-0 bg-gradient-to-tr from-blue-800 to-blue-600 text-white px-4 py-2 rounded-tr-lg shadow-lg">
                            {image.title}
                          </h2>
                      </div>
                    ))

                  /* Segmento de codigo que pinta 4 imagenes por div, para pantallas de sm en adelante
                     Documentaicon
                      El objetivo es extraer cuantos grupos de 4 se necesitan para la cantidad de imagenes existentes
                      Por cada grupo utilizando map pintamos los div que contendran las imagenes
                       1/ Math.ceil(...) → Redondea hacia arriba
                       2/ Array.from({ length: ... }) → Crea un array vacío con el número de grupos necesarios.
                      */
                     : VectorEspacios.map((_, groupIdx) => (
                      <div key={groupIdx} className="min-w-full grid sm:grid-cols-2 gap-4">
                        {images.slice(groupIdx * 4, groupIdx * 4 + 4).map((image, idx) => (
                          <div key={idx} className="flex relative text-neutral-100 shadow-lg overflow-hidden rounded-2xl">
                            <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                            <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-lg flex items-center gap-2">
                              <FaHeart className="text-white" />
                              <span className="text-white text-lg">{image.likes}</span>
                            </div>
                            <h2 className="absolute bottom-0 left-0 bg-gradient-to-tr from-blue-800 to-blue-600 text-white px-4 py-2 rounded-tr-lg shadow-lg">
                              {image.title}
                            </h2>
                          </div>
                        ))}
                     </div>
                    ))}
 
               </div>
               <div className="absolute inset-0  flex justify-between items-center p-4">
                     <div className="flex p-4  hover:bg-amber-50/50 justify-center items-center rounded-full">
                    <FaChevronLeft onClick={prevSlide} className="text-amber-50 scale-250 "></FaChevronLeft>
                    </div >
                    <div onClick={nextSlide} className="flex p-4  hover:bg-amber-50/50 justify-center items-center rounded-full">
                    <FaChevronRight className="text-amber-50 scale-250 "></FaChevronRight>
                    </div>

               </div>
                  
            </div>
            {/* div contenedor de espacios*/}
            <div className="flex sm:gap-2 gap-1">
              {VectorEspacios.map((_, idx) => (
                <FaMinus 
                  onClick={() => changeIndex(idx)} 
                  key={idx} 
                  className={`text-xl sm:w-auto sm:h-auto w-4 h-4 rounded-full 
                              ${index === idx ? 'text-neutral-100 bg-neutral-100 sm:bg-black' : 'text-neutral-600 bg-neutral-600 sm:bg-black'}`} 
                />
              ))}
            </div>


         </div>
     
    </>
    );
}