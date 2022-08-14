import {  InsertPhotoOutlined, LocalOfferOutlined,  MoreVert, Newspaper, SearchOutlined, SmartDisplayOutlined } from '@mui/icons-material';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Radio from '@mui/joy/Radio';

import * as React from 'react';

export default function Navigation() {

  return (
    <Box sx={{
        marginTop:"27px",
        marginBottom:1,
        marginLeft:"161px",
        '@media (max-width: 1300px)': {
            marginLeft:"20px",
        },
    }}>
      <Box  sx={{display:"flex",flexWrap:"nowrap"}}>
          {[
            ['All',<SearchOutlined fontSize='small' />],
            ['Images',<InsertPhotoOutlined fontSize='small' />],
            ['News',<Newspaper fontSize='small' />],
            ['Videos',<SmartDisplayOutlined fontSize='small' />],
            ['Shopping',<LocalOfferOutlined fontSize='small' />],
            ['More',<MoreVert fontSize='small' />],
          ].map((name) => {
            return (
              <Chip
                key={name[0]}
                sx={{color:"#5f6368",
                underline:"10px solid #000000",
            }}
                variant='plain'
                startDecorator={name[1]}
              >
                <Radio
                sx={{fontSize:"14px",}}
                  variant="plain"
                  disableIcon
                  overlay
                  label={name[0]}
                  value={name[0]}
                />
              </Chip>
            );
          })}
      </Box>
      </Box>
    
  );
}