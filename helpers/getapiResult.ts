import { apiBaseUrl } from "@/constants/Constants";

export async function getapiResult(
  route: string,
  subRoute: string,
  body: object
) {
  try {
    const res = await fetch(`${apiBaseUrl}/${route}/${subRoute}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const jsonRes = await res.json();
      return jsonRes.Result;
    }
  } catch (error) {
    console.error(error);
  }
}
