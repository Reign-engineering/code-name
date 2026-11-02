function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('配電工程常用材料與工量查詢系統')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getAllSheetsData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 取得「材料」與「工量」分頁，若名稱不同請依實際分頁名稱微調
  const materialSheet = ss.getSheetByName('材料') || ss.getSheets()[0];
  const workSheet = ss.getSheetByName('工量') || ss.getSheets()[1];
  
  return {
    material: materialSheet ? materialSheet.getDataRange().getValues() : [],
    work: workSheet ? workSheet.getDataRange().getValues() : []
  };
}
