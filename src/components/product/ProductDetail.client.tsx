// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import {Disclosure} from '@headlessui/react';
import {Link} from '@shopify/hydrogen';

import {Text, IconClose} from '~/components';

import { Container, Typography } from '@mui/material';

export function ProductDetail({
  title,
  content,
  learnMore,
}: {
  title: string;
  content: string;
  learnMore?: string;
}) {
  return (
    <>
      <Typography variant="h4">{title}</Typography>
      {/* <Typography variant="p">{content}</Typography> */}
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </>
  );
}
