import mixpanel, { Mixpanel } from 'mixpanel-browser';
mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '');
export { mixpanel as Mixpanel };
