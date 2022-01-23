export function changeCSS(selector: string, property: string, value: string): void {
  const thisCSS = Array.from(document.styleSheets);
  for (const sheet of thisCSS) {
    try {
      var ruleSearch = Array.from(sheet.cssRules);
      for (const rule of ruleSearch) {
        if (rule instanceof CSSStyleRule && rule.selectorText === selector) {
          rule.style.setProperty(property, value);
          return;
        }
      }
    } catch (e) {}
  }

  for (const sheet of thisCSS) {
    try {
      sheet.insertRule(
        `${selector} { ${property} : ${value}; }`,
        0//sheet.cssRules.length - 1
      );
      return;
    } catch (e) {}
  }
}
