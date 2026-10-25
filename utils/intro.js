export const INTRO_SEEN_KEY = "devfolio:intro-seen";

export const introScript = `(function(){var d=document,h=d.documentElement;var n=performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];try{(sessionStorage.getItem("${INTRO_SEEN_KEY}")||n&&(n.type==="reload"||n.type==="back_forward"))&&(h.dataset.introSeen="")}catch(e){}if(!d.prerendering&&d.visibilityState==="visible")return;h.dataset.introWaiting="";var f=function(){if(d.prerendering||d.visibilityState!=="visible")return;delete h.dataset.introWaiting;d.removeEventListener("visibilitychange",f);d.removeEventListener("prerenderingchange",f)};d.addEventListener("visibilitychange",f);d.addEventListener("prerenderingchange",f)})()`;

const isShown = () =>
  !document.prerendering && document.visibilityState === "visible";

export const whenShown = (callback) => {
  if (isShown()) {
    const navigation = performance.getEntriesByType("navigation")[0];
    const [firstPaint] = [
      ...performance.getEntriesByName("first-paint"),
      ...performance.getEntriesByName("first-contentful-paint"),
    ];
    callback(
      Math.max(navigation?.activationStart ?? 0, firstPaint?.startTime ?? 0),
    );
    return () => {};
  }
  const onShow = () => {
    if (!isShown()) return;
    stop();
    callback(performance.now());
  };
  const stop = () => {
    document.removeEventListener("visibilitychange", onShow);
    document.removeEventListener("prerenderingchange", onShow);
  };
  document.addEventListener("visibilitychange", onShow);
  document.addEventListener("prerenderingchange", onShow);
  return stop;
};
