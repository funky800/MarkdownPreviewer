import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
    const [markdown, setMarkdown] = useState(`
# Welcome to React Markdown Previewer

## Heading level 2

### Heading level 3

Click on the link to learn more [Markdown Cheat sheet](https://www.markdownguide.org/cheat-sheet/)


Here are some list items:

1. First item

2. Second item

3. Third item

This is a \`code\`

A code block:

\`\`\`
const sum= function(num){
	return num + 2;
}
\`\`\`
>This is a blockquote

I just love **bold text**

![React image](https://goo.gl/Umyytc)

    `);

  return (
  <div className="App">
    <div className="container">

    <div className= "row mt-4">
    <div className="col text-center">
    <h1>Markdown Previewer</h1>
    </div>
    </div>
    
    <div className = "row mt-4"> 
   <div className="col-md-6">
   <h4 className="card-header">Markdown</h4>
    <textarea className= "info" id="editor" value={markdown}  onChange= {(event)=>{setMarkdown(event.target.value);}}
           />
          </div>
     

      <div className="col-md-6">
      <h4 className="card-header">Preview</h4>
    <div  id='preview' className="info">
   <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
     
     </div>
     
      </div>
      
      </div>
    </div>
  );
}

export default App;
