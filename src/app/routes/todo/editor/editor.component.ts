import { Component, VERSION, OnInit } from '@angular/core';
import { excelToMarkdown, looksLikeTable } from './excel-markdown-tables';

@Component({
  selector: 'app-todo-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class TodoEditorComponent implements OnInit {
  canLeave = false;

  angularVersion = VERSION.full;
  ngxMarkdownVersion = '7.1.4';

  markdown = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

\`\`\`javascript
var s = "JavaScript syntax highlighting";
\`\`\`

\`\`\`python
s = "Python syntax highlighting"
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
  - Unordered list
  - Another unordered bullet point

### Blockquote
> Blockquote to the max`;

  ngOnInit() {
    this.copyExcelPasteMarkdown();
  }
  copyExcelPasteMarkdown() {
    const editor = document.getElementById('editor');
    editor.addEventListener('paste', event => {
      const clipboard = event.clipboardData;
      const data = clipboard.getData('text/plain').trim();
      if (looksLikeTable(data)) {
        event.preventDefault();
      } else {
        return;
      }
      event.target['value'] += excelToMarkdown(data);;
      return false;
    });
  }
}
