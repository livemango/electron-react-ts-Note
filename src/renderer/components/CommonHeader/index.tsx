import React from 'react';
import { Input, Button } from 'antd';
import styles from './CommonHeader.module.css';

interface PropTypes {
  onShowComplexInputDialog: (params: boolean) => void;
}
const CommonHeader: React.FC<PropTypes> = (props) => {
  const { onShowComplexInputDialog } = props;
  return (
    <div className={styles.misi_header_content}>
      <Input placeholder="easy" />
      <Button onClick={() => onShowComplexInputDialog(true)}>complex</Button>
      <Input placeholder="search" />
    </div>
  );
};
export default CommonHeader;
