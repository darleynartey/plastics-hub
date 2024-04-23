import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import deal1 from '../../assets/deal1.jpg';
import deal2 from '../../assets/deal2.jpg';
import deal3 from '../../assets/deal3.jpg';
import deal4 from '../../assets/deal4.jpg';

const Dealers = () => {
  const data = [
    {
      name: 'Nora Osei',
      img: {
        id: 1,
        src: deal1,
        alt: "Image 1",
      },
      review: '4.5'
    },
    {
      name: 'Tracey Oppong',
      img: {
        id: 1,
        src: deal2,
        alt: "Image 2",
      },
      review: '4.6'
    },
    {
      name: 'Veronica Nartey',
      img: {
        id: 1,
        src: deal3,
        alt: "Image 3",
      },
      review: '4.9'
    },
    {
      name: 'Janet Asamoah',
      img: {
        id: 1,
        src: deal4,
        alt: "Image 3",
      },
      review: '4.9'
    },
  
  
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className='w-3/4 m-auto'>
      <div>
      <Slider {...settings} className='mt-40 mr-10'>
        {data.map((d) => (
          <div className='bg-white h-[450px] text-black rounded-xl'>
           <div className='flex flex-col justify-center items-center gap-4 pt-4'>
            <img src={d.img.src} alt="" className='h-60 w-60 object-cover rounded-full'/>
             <p className='text-xl font-semibold'>{d.name}</p>
             <p>{d.review}</p>
             <button className='text-black text-lg px-6 py-1'>Contact</button>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  )
}



export default Dealers