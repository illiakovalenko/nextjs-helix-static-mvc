import { Text, Field, Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type HeroBannerProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    Title: Field<string>;
    Subtitle: Field<string>;
    Image: ImageField;
  };
};

const HeroBanner = (props: HeroBannerProps): JSX.Element => {
  return (
    <div
      style={{
        background: '##fdfdfd',
        border: '1px solid black',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <Image field={props.fields.Image} />
      <h1 style={{ fontWeight: 'bold', fontSize: '22px' }}>HeroBanner Component</h1>
      <Text field={props.fields.Title} />
      <Text field={props.fields.Subtitle} />
    </div>
  );
};

export default HeroBanner;
