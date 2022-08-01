import React from 'react';

import { Editor } from '../src/index';

export default {
  title: 'Editor',
  component: Editor
};

const Template = args => {
  const codeInit = "const x = 'HelloWorld'";
  const [code, setCode] = React.useState(codeInit);

  return (
    <div>
      <Editor language="js" code={code} onChange={setCode} />
      <button
        onClick={() => {
          setCode(codeInit);
        }}
      >
        Reset
      </button>
      <p>{code}</p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  language: 'js',
  code: "const x = 'Hello World!';"
};
