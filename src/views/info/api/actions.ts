"use server"

export async function getClicksData(url: string) {
  const response = await fetch(url)

  return response.json()
}
