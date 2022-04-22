import React from 'react';
import { Button, Row } from 'antd';
import { StarTwoTone } from '@ant-design/icons';
import styles from './NoteItem.module.css';

interface PropTypes {
  test: string;
}
const NoteContent: React.FC<PropTypes> = () => {
  return (
    <div className={styles.note_item}>
      <div className={styles.main_container}>
        <Row>
          <p>123333333333333333333333333333333333333333</p>
        </Row>
        <Row>
          <span>2022年4月22日</span>
          <span>
            <StarTwoTone />
          </span>
        </Row>
      </div>
      <div className={styles.pic}>
        <div>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109250135543096-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653202804&t=ca9e52ee7b65d4ceadb4e2c7b9fcd68d"
            alt=""
          />
        </div>
      </div>
      <div className={styles.operate}>
        <Button type="primary">edit</Button>
        <Button type="primary">delete</Button>
      </div>
    </div>
  );
};
export default NoteContent;
