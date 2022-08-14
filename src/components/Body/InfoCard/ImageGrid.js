import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageGrid({itemData}) {
  return (
      <ImageList variant='quilted' cols={4}>
          {itemData.map((item)=>{
              return(
                <ImageListItem cols={item.cols} rows={item.rows}>
                    <img src={item.img} alt={item.title} />
                </ImageListItem>
              )
          })}
          

      </ImageList>    
  );
}

