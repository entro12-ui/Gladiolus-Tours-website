interface IProps {
  alt: string;
  src: string;
}
export const Images = ({ src, alt }: IProps) => {
  return <img src={src} alt={alt} />;
};

export const Logo = ({ src, alt }: IProps) => {
  return <img src={src} alt={alt} />;
};
