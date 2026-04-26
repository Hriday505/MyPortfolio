const HOME_PRELOADER_KEY = "home-preloader-shown";

export function getHasShownHomePreloader() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(HOME_PRELOADER_KEY) === "true";
}

export function setHasShownHomePreloader(value: boolean) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(HOME_PRELOADER_KEY, value ? "true" : "false");
}

