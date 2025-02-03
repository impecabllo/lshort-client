// eslint-disable-next-line import/no-anonymous-default-export
export default {
  paths: {
    shortUrl: "/api/link",
    linkClicks: (code: string) => `/api/clicks/${code}`,
  },
}
