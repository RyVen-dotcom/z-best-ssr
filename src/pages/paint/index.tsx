import React from 'react';
import { GetServerSideProps } from 'next';
import VPaint from '../../view/paint';
import { paintImages, PaintProps } from '../../../server/mock/paint-images';

const Paint:React.FC<PaintProps> = (props) => (<VPaint {...props} />);
export default Paint;

export const getServerSideProps:GetServerSideProps = async () => {
  const res = paintImages;

  return {
    props: {
      modern: res.modern,
      european: res.european,
      romantic: res.romantic,
      american: res.american,
    },
  };
};
