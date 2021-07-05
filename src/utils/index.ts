/**
 * @description 跳转锚点
 * @param url
 */
export const routerLink = (url: string) => {
  if (url) {
    // 找到锚点
    const anchorElement = document.getElementById(url);
    // 如果对应id的锚点存在，就跳转到锚点
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }
};
