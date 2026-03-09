/**
 * Wraps markdown-rendered FAQ sections in a styled .faq-wrapper div.
 * Detects H2 headings containing "spørsmål" (e.g. "Vanlige spørsmål",
 * "Ofte stilte spørsmål om ...") and wraps them + all following H3/P
 * siblings until the next H2 or end of content.
 */
export function wrapFaqHtml(html: string): string {
  // Match H2 that contains "spørsmål" (case-insensitive)
  const faqH2Pattern = /<h2[^>]*>([^<]*spørsmål[^<]*)<\/h2>/i;
  const match = html.match(faqH2Pattern);
  if (!match) return html;

  const faqStart = match.index!;
  const afterH2 = faqStart + match[0].length;

  // Find where the FAQ section ends: next H2 or end of string
  const restHtml = html.slice(afterH2);
  const nextH2Match = restHtml.match(/<h2[\s>]/i);
  const faqEndOffset = nextH2Match ? nextH2Match.index! : restHtml.length;

  const beforeFaq = html.slice(0, faqStart);
  const faqH2 = match[0];
  const faqContent = restHtml.slice(0, faqEndOffset);
  const afterFaq = restHtml.slice(faqEndOffset);

  return `${beforeFaq}<div class="faq-wrapper">${faqH2}${faqContent}</div>${afterFaq}`;
}
