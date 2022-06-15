import React from 'react';
import { makeStyles } from '@material-ui/core';

const carouselData = [
  {
    id: '1',
    picUrl: '/img/banner1.jpg',
    alt: 'banner1',
  },
  {
    id: '2',
    picUrl: '/img/banner2.jpg',
    alt: 'banner2',
  },
  {
    id: '3',
    picUrl: '/img/banner3.jpg',
    alt: 'banner3',
  },
];

const useStyle = makeStyles((theme) => ({
  container: {
    '& .swiper-pagination-bullet': {
      width: 10,
      height: 10,
    },
    '&. swiper-slide': {
      borderRadius: 5,
      overflow: 'hidden',
    },
    '& .swiper-pagination-bullet-active': {
      background: theme.palette.background.paper,
    },
  },
  swiperItem: {
    width: '100%',
    height: 660,
  },
}));

const Banner:React.FC = () => {
  const classes = useStyle();
  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line
    new Swiper(ref.current, {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });
  }, []);
  return (
    <div className={classes.container}>
      <div className="swiper-container" ref={ref}>
        <div className="swiper-wrapper">
          {carouselData.map((item) => (
            <div key={item.id} className="swiper-slide">
              <div className={classes.swiperItem}>
                <img src={item.picUrl} alt={item.alt} width="100%" height={660} />
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  );
};
export default Banner;
