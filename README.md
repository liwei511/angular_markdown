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


复制：

```
290	785946927.5	828980488.3
15470832	665	6
```

效果：

| 290      | 785946927.5 | 828980488.3 |
|----------|-------------|-------------|
| 15470832 | 665         | 6           |


3/15 增加 	复制图片上传显示 功能，可以复制图片插入markdown。
