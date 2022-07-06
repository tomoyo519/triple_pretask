export const FadeInItems = (isMounted = false, delay = 0) => `
  opacity: ${isMounted ? 1 : 0};
  transform: translateY(${isMounted ? "0" : "10px"});
  transition: all 700ms ease-out ${delay}ms;
  `;
