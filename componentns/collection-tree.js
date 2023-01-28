import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Image from "next/image";
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import BorderColor from '@mui/icons-material/BorderColor';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { IOSSwitch } from "./switch";
import labelImg1 from '../componentns/img/Avatar.png'
import labelImg2 from '../componentns/img/ee.png'

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    width: '100%',
    position: 'relative',
    top: '-15px',

    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {

  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    style,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }} >
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
        flexDirection: 'row',
        alignItems: 'center',
        padding: '16px 20px',
        gap: '12px',
        width: '100%',
        height: '60px',
        background: '#FFFFFF',
        borderRadius: '16px',
        marginBottom: "4px",
        position: 'relative',
        transition: 'top 0.2s',
        ...style
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};
function CollectionButtons() {
  return (
    <div style={{ display: 'flex', fontSize: '20px', alignItems: 'center' }}>
      <IOSSwitch />
      <FilterNoneIcon style={{ fontSize: '22px', color: '#45AA61' }} />
      <DeleteOutlinedIcon style={{ fontSize: '27px', color: '#FF6666' }} />
    </div>
  )
}
function CollectionButtonMaster() {
  return (
    <div style={{ display: 'flex', fontSize: '20px', alignItems: 'center', marginTop: '10px' }}>
      <FilterNoneIcon style={{ fontSize: '22px', color: '#45AA61' }} />
      <DeleteOutlinedIcon style={{ fontSize: '27px', color: '#FF6666' }} />
    </div>
  )
}
function CollectionNameIcon() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', color: '#212F43', marginTop: '10px' }}>
      Collection Name
      <BorderColorOutlinedIcon style={{ marginLeft: '15px' }} />
    </div>
  )
}
function CollectionLabelIcon({ img, text1, text2 }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center'
    }}>
      <Image src={img} alt="labelIgm" />
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  )
}
export function Collection({ index, initialState, dropdownState, setDropdownState }) {
  function handleOnClick(e) {
    const temp = !dropdownState[index]
    initialState[index] = temp
    setDropdownState({ ...initialState })
    console.log(dropdownState)
  }
  return (
    <div style={{
      padding: '20px', border: '1px solid #EAECF0', marginBottom: '15px', boxShadow: '0px 4px 8px - 2px rgba(16, 24, 40, 0.1), 0px 2px 4px - 2px rgba(16, 24, 40, 0.06)',
      borderRadius: '8px', background: '#F6F7F9'
    }}>
      <TreeView
        aria-label="gmail"
        defaultExpanded={['3']}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
        sx={{ flexGrow: 1, overflowY: 'auto', width: '100%', height: 'auto' }}

      >
        <StyledTreeItem
          nodeId="4"
          labelText={<CollectionNameIcon />}
          labelIcon={BorderColor}
          labelInfo={<CollectionButtonMaster />}
          color="#1a73e8"
          bgColor="#FFFFFF"
          onClick={handleOnClick}
          style={{ marginTop: '2px' }}
        />
        <StyledTreeItem
          nodeId="5"
          labelText={<CollectionLabelIcon img={labelImg1} text1="Circooles" text2="Version 3" />}
          labelIcon={BorderColor}
          labelInfo={<CollectionButtons />}
          color="#1a73e8"
          bgColor="#FFFFFF"
          width="90%"
          style={{
            width: '91%',
            top: !dropdownState[index] ? '-75px' : '',
            right: "-75px",
            display: !dropdownState[index] ? 'none' : 'block'
          }}
        />
        <StyledTreeItem
          nodeId="6"
          labelText={<CollectionLabelIcon img={labelImg2} text1="Quotient" text2="Version 3" />}
          labelIcon={InfoIcon}
          labelInfo={<CollectionButtons />}
          color="#1a73e8"
          bgColor="#FFFFFF"
          style={{
            right: "-75px",
            width: '91%',
            top: !dropdownState[index] ? '-150px' : '',
            display: !dropdownState[index] ? 'none' : 'block'
          }}
        />
        <StyledTreeItem
          nodeId="7"
          labelText={<CollectionLabelIcon img={labelImg1} text1="Circooles" text2="Version 3" />}
          labelIcon={ForumIcon}
          labelInfo={<CollectionButtons />}
          color="#1a73e8"
          bgColor="#FFFFFF"
          style={{
            right: "-75px",
            width: '91%',
            top: !dropdownState[index] ? '-225px' : '',
            display: !dropdownState[index] ? 'none' : 'block'
          }}
        />
      </TreeView>
    </div>
  );
}