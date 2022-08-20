import React, {useState} from 'react';
import classNames from 'classnames';

interface DraggerProps {
  onFile: (files: FileList) => void;
  children: React.ReactNode;
}

export const Dragger: React.FC<DraggerProps> = (props) => {
  const { onFile, children } = props
  const [ dragOver, setDragOver ] = useState(false)
  const classes = classNames('uploader-dragger', {
    'is-dragover': dragOver
  })

  const handleDrag = (e: React.DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    onFile(e.dataTransfer.files)
  }
  return (
    <div
      onDragOver={e => handleDrag(e, true)}
      onDragLeave={e => handleDrag(e, false)}
      onDrop={handleDrop}
      className={classes}>
      {children}
    </div>
  )
}

export default Dragger;