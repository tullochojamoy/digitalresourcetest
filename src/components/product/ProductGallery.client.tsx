import {MediaFile} from '@shopify/hydrogen/client';
import type {MediaEdge} from '@shopify/hydrogen/storefront-api-types';
import {ATTR_LOADING_EAGER} from '~/lib/const';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export function ProductGallery({
  media,
  className,
}: {
  media: MediaEdge['node'][];
  className?: string;
}) {
  if (!media.length) {
    return null;
  }
  console.log(media)
  return (
    <ImageList sx={{ width: '100%', height: 740 }} cols={2} rowHeight={164}>
      {media.map((item) => {
        console.log(item)
        // id
        // item?.image?.url
        // item?.image?.width
        // item?.image?.height

        return (
          <ImageListItem>
            <img
              src={`${item?.image?.url}`}
              //srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
        </ImageListItem>
      )})
    } 
    </ImageList>
  );
}
