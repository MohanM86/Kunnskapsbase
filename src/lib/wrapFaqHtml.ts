/**
 * Wraps markdown-rendered FAQ sections in a styled .faq-wrapper div.
 * Detects H2 or H3 headings containing "spørsmål" (including HTML-encoded
 * variants) and wraps them + all following content until the next H2.
 */
export function wrapFaqHtml(html: string): string {
  // Match H2 or H3 that contains "spørsmål" in various encodings
  const faqPattern = /<h([23])[^>]*>([^<]*(?:sp(?:ø|&#xF8;|&oslash;)rsm(?:å|&#xE5;|&aring;)l|spørsmål)[^<]*)<\/h\1>/i;
  const match = html.match(faqPattern);
  if (!match) return html;

  const faqStart = match.index!;
  const headingLevel = match[1];
  const afterHeading = faqStart + match[0].length;

  // FAQ section ends at next H2 or end of content
  const restHtml = html.slice(afterHeading);
  const nextH2 = restHtml.match(/<h2[\s>]/i);
  const faqEndOffset = nextH2 ? nextH2.index! : restHtml.length;

  const beforeFaq = html.slice(0, faqStart);
  const faqContent = restHtml.slice(0, faqEndOffset);
  const afterFaq = restHtml.slice(faqEndOffset);

  // Normalize heading to H2 for consistent styling
  let styledHeading = match[0];
  if (headingLevel === '3') {
    styledHeading = styledHeading
      .replace(/^<h3/, '<h2')
      .replace(/<\/h3>$/, '</h2>');
  }

  return `${beforeFaq}<div class="faq-wrapper">${styledHeading}${faqContent}</div>${afterFaq}`;
}
