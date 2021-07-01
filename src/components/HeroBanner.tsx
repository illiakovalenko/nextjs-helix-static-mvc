import {
  Text,
  Field,
  Image,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
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
    <div>
    <p>HeroBanner Component1111</p>
    <Text field={props.fields.Title} />
    <Text field={props.fields.Subtitle} />
    <Image field={props.fields.Image} />
  </div>
  )
}

export default HeroBanner;
