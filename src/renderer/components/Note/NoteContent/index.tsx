import React from 'react';
import NoteItem from '../NoteItem';

interface PropTypes {
  test: string;
}
const NoteContent: React.FC<PropTypes> = () => {
  return <NoteItem test="test" />;
};
export default NoteContent;
