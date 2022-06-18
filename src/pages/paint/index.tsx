import React from 'react';
import { GetServerSideProps } from 'next';
import { getPaintImages } from '@components/best-router/comp/service';
import VPaint from '../../view/paint';
import { PaintProps } from '../../../server/mock/paint-images';

const Paint:React.FC<PaintProps> = (props) => (<VPaint {...props} />);
export default Paint;

export const getServerSideProps:GetServerSideProps = async () => {
  const res = await getPaintImages();

  return {
    props: {
      modern: res.modern,
      european: res.european,
      romantic: res.romantic,
      american: res.american,
    },
  };
};
