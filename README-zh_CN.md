```typescript
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
```

### 项目使用了开源框架ng-alain, ngx-markdown,  prismjs。

