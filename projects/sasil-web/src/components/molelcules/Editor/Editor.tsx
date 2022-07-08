/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import { Editor as ToastEditor, EditorProps } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export type HookCallback = (url: string, text?: string) => void;
export type onUploadImageType = (
  blob: Blob | File,
  callback: HookCallback,
) => void;

interface EditorPropsType extends EditorProps {
  onUploadImage?: onUploadImageType;
}

const Editor = forwardRef<ToastEditor | undefined, EditorPropsType>(
  ({ onUploadImage }, ref) => (
    <ToastEditor
      ref={ref as React.MutableRefObject<ToastEditor>}
      placeholder="내용을 작성해주세요"
      initialValue=""
      previewStyle="tab"
      initialEditType="wysiwyg"
      height="500px"
      usageStatistics={false}
      useCommandShortcut
      hooks={{
        addImageBlobHook: onUploadImage,
      }}
    />
  ),
);

export default Editor;
