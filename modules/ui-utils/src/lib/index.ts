const DEFAULT_BASE_HREF = '/';

/** the <base .../> tag is set by webpack and defined in the baseHref property of the Nx app's project.json */
export function getAppBaseHref() {
  const baseTags = document.getElementsByTagName('base');
  const baseHref = baseTags.item(0)?.getAttribute('href');
  if (!baseTags || baseTags.length !== 1) {
    console.error('Expected exactly one base tag, but got: ', baseTags);
    return DEFAULT_BASE_HREF;
  }
  if (!baseHref) {
    console.error(
      'Expected the base tag to have an href, but it is not present.'
    );
    return DEFAULT_BASE_HREF;
  }
  return baseHref;
}
