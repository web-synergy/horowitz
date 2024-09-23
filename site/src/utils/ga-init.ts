import ReactGA from 'react-ga4';

enum HitTypes {
  PageView = 'pageview',
}

const ga = {
  initGoogleAnalytics() {
    const trackingId = import.meta.env.VITE_GA_ID;
    if (!trackingId)
      console.warn('No tracking id is found for Google Analytics');

    ReactGA.initialize([
      {
        trackingId,
      },
    ]);
  },

  sendData(type: HitTypes, data: { [key: string]: string }) {
    ReactGA.send({ hitType: type, ...data });
  },

  trackPageView(pagePath?: string, pageTitle?: string) {
    if (!pageTitle) {
      pageTitle = document.title;
    }

    if (!pagePath) {
      pagePath = location.href;
    }

    this.sendData(HitTypes.PageView, { page: pagePath, title: pageTitle });
  },
};

export default ga;
