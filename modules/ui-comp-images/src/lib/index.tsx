interface IProps {
  alt: string;
  src: string;
}
export const GladiolusToursImage = ({ src, alt }: IProps) => {
  return <img src={src} alt={alt} />;
};

export const GladiolusToursLogo = ({ src, alt }: IProps) => {
  return <img src={src} alt={alt} />;
};
