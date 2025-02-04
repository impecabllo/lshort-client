// eslint-disable-next-line import/no-anonymous-default-export
export default {
  paths: {
    shortUrl: "/link",
    linkClicks: (code: string) => `/link/clicks/${code}`,
  },
}
