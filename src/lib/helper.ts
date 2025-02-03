export const urlRegex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

export const getBaseUrl = () => {
  return process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://api.lshort.ru"
}

export const getBaseHost = (host: string | null) => {
  return process.env.NODE_ENV === "development" ? `http://${host}` : `https://${host}`
}
