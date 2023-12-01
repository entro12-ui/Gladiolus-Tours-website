import { Helmet } from 'react-helmet-async';

export interface PageHelmetProps {
  title?: string;
  titleTemplate?: string;
  description?: string;
}

const CorePageHelmet = ({
  title,
  titleTemplate,
  description,
}: PageHelmetProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {title} - {titleTemplate}
      </title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export const EntryPageHelmet = (props: PageHelmetProps) => {
  return <CorePageHelmet {...props} />;
};

EntryPageHelmet.defaultProps = {
  title: 'Gladiolus Tours',
  titleTemplate: 'Gladiolus Tours',
  description: 'Gladiolus Tours',
};

export const ToursPageHelmet = (props: PageHelmetProps) => {
  return <CorePageHelmet {...props} />;
};

ToursPageHelmet.defaultProps = {
  title: 'Gladiolus Tours',
  titleTemplate: 'Gladiolus Tours: Tour Operator',
  description: 'Gladiolus Tours: Tour Operator',
};
