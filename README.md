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

### used ng-alain, ngx-markdown,  prismjs。

