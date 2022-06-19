export interface scaleImg {
  small: string;
  big: string;
}
export interface proImg {
  small: string;
  big: string;
  title: string;
}
export interface priceImg {
  url: string;
  label: string;
  price: number
}
export interface ProDetailList {
  proDetList: Array<scaleImg>
  proList: Array<proImg>
  msgList: Array<string>
  seeList: Array<string>
  likeList: Array<priceImg>
}

export const proDetailList:ProDetailList = {
  proDetList: [
    {
      small: '/img/temp/proDet01.jpg',
      big: '/img/temp/proDet01_big.jpg',
    }, {
      small: '/img/temp/proDet02.jpg',
      big: '/img/temp/proDet02_big.jpg',
    }, {
      small: '/img/temp/proDet03.jpg',
      big: '/img/temp/proDet03_big.jpg',
    }, {
      small: '/img/temp/proDet04.jpg',
      big: '/img/temp/proDet04_big.jpg',
    },
  ],
  proList: [
    {
      small: '/img/temp/prosmall01.jpg',
      big: '/img/temp/proBig01.jpg',
      title: '白瓷花瓶+20支快乐花',
    }, {
      small: '/img/temp/prosmall02.jpg',
      big: '/img/temp/proBig02.jpg',
      title: '白瓷花瓶+20支兔尾巴草',
    }, {
      small: '/img/temp/prosmall03.jpg',
      big: '/img/temp/proBig03.jpg',
      title: '20支快乐花',
    }, {
      small: '/img/temp/prosmall04.jpg',
      big: '/img/temp/proBig04.jpg',
      title: '20支兔尾巴草',
    },
  ],
  msgList: [
    '/img/temp/det01.jpg',
    '/img/temp/det02.jpg',
    '/img/temp/det03.jpg',
    '/img/temp/det04.jpg',
    '/img/temp/det05.jpg',
    '/img/temp/det06.jpg',
    '/img/temp/det07.jpg',
  ],
  seeList: [
    '/img/temp/see01.jpg',
    '/img/temp/see02.jpg',
    '/img/temp/see03.jpg',
    '/img/temp/see04.jpg',
  ],
  likeList: [
    {
      url: '/img/temp/like01.jpg',
      label: '【最家】复古文艺风玻璃花瓶',
      price: 193.20,
    }, {
      url: '/img/temp/like02.jpg',
      label: '【最家】复古文艺风玻璃花瓶',
      price: 193.20,
    }, {
      url: '/img/temp/like03.jpg',
      label: '【最家】复古文艺风玻璃花瓶',
      price: 193.20,
    }, {
      url: '/img/temp/like04.jpg',
      label: '【最家】复古文艺风玻璃花瓶',
      price: 193.20,
    }, {
      url: '/img/temp/like05.jpg',
      label: '【最家】复古文艺风玻璃花瓶',
      price: 193.20,
    },
  ],
};
