import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Tabs } from 'antd';
import styles from './App.module.css';
import CommonHeader from './components/CommonHeader';
import NoteContent from './components/Note/NoteContent';

// import 'antd/lib/button/style/index.css';

const Content = () => {
  const { TabPane } = Tabs;
  const [isShowComplexInputDialog, setIsShowComplexInputDialog] =
    useState<boolean>(false);
  const onShowComplexInputDialog = (params: boolean) => {
    console.log('onShowComplexInputDialog', params, isShowComplexInputDialog);

    setIsShowComplexInputDialog(params);
  };
  return (
    <div className={styles.misi_content}>
      <CommonHeader onShowComplexInputDialog={onShowComplexInputDialog} />
      <div className={styles.misi_middile_content}>
        <Tabs defaultActiveKey="1" tabPosition="left">
          <TabPane tab="note" key="1">
            <NoteContent test="test" />
          </TabPane>
          <TabPane tab="todo" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="serect" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </Router>
  );
}
