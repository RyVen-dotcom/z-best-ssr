export interface ImgProps {
  imgUrl: string,
  href?: string
  label?: string,
  price?: number,
}
export interface HomeImageProps {
  unique:Array<ImgProps>;
  flower:Array<ImgProps>;
  nordic:Array<ImgProps>;
}

export const homeImages:HomeImageProps = {
  unique: [
    {
      imgUrl: '/img/i1.jpg',
      href: '/vase_proList',
    },
    {
      imgUrl: '/img/i2.jpg',
      href: '/proList',
    },
    {
      imgUrl: '/img/i3.jpg',
      href: '/#2',
    },
  ],
  flower: [
    {
      imgUrl: '/img/flo1.jpg',
      price: 79,
      label: '【花艺】七头美丽玫瑰仿真花束',
    },
    {
      imgUrl: '/img/flo2.jpg',
      price: 79,
      label: '【花艺】七头美丽玫瑰仿真花束',
    },
    {
      imgUrl: '/img/flo3.jpg',
      price: 79,
      label: '【花艺】七头美丽玫瑰仿真花束',
    },
    {
      imgUrl: '/img/flo4.jpg',
      price: 79,
      label: '【花艺】七头美丽玫瑰仿真花束',
    },
    {
      imgUrl: '/img/flo5.jpg',
      price: 79,
      label: '【花艺】七头美丽玫瑰仿真花束',
    },
    {
      imgUrl: '/img/flo6.jpg',
      price: 79,
      label: '【花艺】七头美丽玫瑰仿真花束',
    },
  ],
  nordic: [
    {
      imgUrl: 'img/s7.jpg',
      label: '【最家】不锈钢壁饰墙饰软装',
      price: 688,
    },
    {
      imgUrl: 'img/s10.jpg',
      label: '【最家】小城动物木板画壁挂北欧',
      price: 188,
    },
    {
      imgUrl: 'img/s4.jpg',
      label: '【最家】玄关假山水壁饰背景墙饰挂件创意',
      price: 599,
    },
    {
      imgUrl: 'img/s9.jpg',
      label: '【最家】金属树枝壁饰铜鸟装饰品',
      price: 928,
    },
    {
      imgUrl: 'img/s6.jpg',
      label: '【最家】金属壁饰创意背景墙面挂件创意',
      price: 228,
    },
    {
      imgUrl: 'img/s8.jpg',
      label: '【最家】小城动物木板画壁挂北欧',
      price: 199,
    },
    {
      imgUrl: 'img/s12.jpg',
      label: '【最家】欧式复古挂钟创意餐厅钟表家居挂件',
      price: 666,
    },
    {
      imgUrl: 'img/s1.jpg',
      label: '【最家】客厅地中海欧式现代相片墙创意',
      price: 598,
    },
    {
      imgUrl: 'img/s5.jpg',
      label: '【最家】铁艺荷叶壁挂软装背景墙上装饰品',
      price: 800,
    },
    {
      imgUrl: 'img/s3.jpg',
      label: '【最家】欧式照片墙 创意组合结婚礼物',
      price: 189,
    },
    {
      imgUrl: 'img/s2.jpg',
      label: '【最家】欧式钟表相框墙挂墙创意组合',
      price: 148,
    },
    {
      imgUrl: 'img/s11.jpg',
      label: '【最家】小城动物木板画壁挂北欧',
      price: 188,
    },
  ],
};
