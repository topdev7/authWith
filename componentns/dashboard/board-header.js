import React from 'react'
import Badge from '@mui/material/Badge';
import { CollectionModal } from "./collection-modal";
import { LoremContentTypo, DashboardTitleTypo } from "../../styled/typhos";


export function BoardHeader() {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <DashboardTitleTypo>
          Collections
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            style={{
              fontFamily: 'Urbanist',
              width: '100px',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '12px',
              textAlign: 'center',
              color: '#348049',
              backgroundColor: '#E1FFE9',
              borderRadius: '16px',
              padding: '0 13px',
              position: 'absolute',
              height: '25px',
              alignitems: 'center',
              marginTop: '5px',
              marginLeft: '15px',
            }}
          >
            25 collections
          </Badge>
        </DashboardTitleTypo>
        <CollectionModal />
      </div>
      <LoremContentTypo>
        Lorem ipsum dolor sit, amet consectetur ipsum fermentum porttittoe enim
      </LoremContentTypo>
    </>
  )
}