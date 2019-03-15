import * as helper from './excel-markdown-helpers';

const LINE_ENDING = '\n';

/**
 * Converts a string payload into a Markdown formatted table
 * @param rawData A table-like string
 */
export function excelToMarkdown(rawData: string): string {
  let data = rawData.trim();
  var rows = helper.splitIntoRowsAndColumns(data);
  var { columnWidths, colAlignments } = helper.getColumnWidthsAndAlignments(
    rows,
  );
  const markdownRows = helper.addMarkdownSyntax(rows, columnWidths);

  return helper
    .addAlignmentSyntax(markdownRows, columnWidths, colAlignments)
    .join(LINE_ENDING);
}

export function looksLikeTable(rawData: string) {
    return helper.looksLikeTable(rawData.trim());
}
