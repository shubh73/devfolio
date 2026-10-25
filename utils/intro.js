export const INTRO_SEEN_KEY = "devfolio:intro-seen";

export const introScript = `(function(){var d=document,h=d.documentElement;try{history.scrollRestoration="manual"}catch(e){}var n=performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];try{(sessionStorage.getItem("${INTRO_SEEN_KEY}")||n&&(n.type==="reload"||n.type==="back_forward"))&&(h.dataset.introSeen="")}catch(e){}if(!d.prerendering&&d.visibilityState==="visible")return;h.dataset.introWaiting="";var f=function(){if(d.prerendering||d.visibilityState!=="visible")return;delete h.dataset.introWaiting;d.removeEventListener("visibilitychange",f);d.removeEventListener("prerenderingchange",f)};d.addEventListener("visibilitychange",f);d.addEventListener("prerenderingchange",f)})()`;

const isWaiting = () => "introWaiting" in document.documentElement.dataset;

export const whenShown = (callback) => {
  if (!isWaiting()) {
    const navigation = performance.getEntriesByType("navigation")[0];
    const loadedHere =
      !navigation || new URL(navigation.name).pathname === location.pathname;
    const firstPaint = loadedHere && performance.getEntriesByType("paint")[0];
    callback(
      Math.max(
        navigation?.activationStart ?? 0,
        firstPaint?.startTime ?? performance.now(),
      ),
    );
    return () => {};
  }
  const onShow = () => {
    if (isWaiting()) return;
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
