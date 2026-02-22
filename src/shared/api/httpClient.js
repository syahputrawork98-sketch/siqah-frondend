import { runtimeConfig } from "@/shared/config";
import { ApiError } from "@/shared/api/apiError";

const DEFAULT_HEADERS = {
  Accept: "application/json",
};

const toQueryString = (query = {}) => {
  const searchParams = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, String(value));
    }
  });
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
};

const resolveUrl = (path, query) => {
  const baseUrl = runtimeConfig.apiBaseUrl.replace(/\/+$/, "");
  const endpoint = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${endpoint}${toQueryString(query)}`;
};

const parseResponseBody = async (response) => {
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
};

export async function httpRequest(path, options = {}) {
  const {
    method = "GET",
    query,
    body,
    headers = {},
    signal,
  } = options;

  const requestHeaders = {
    ...DEFAULT_HEADERS,
    ...headers,
  };

  const hasBody = body !== undefined && body !== null;
  if (hasBody && !(body instanceof FormData) && !requestHeaders["Content-Type"]) {
    requestHeaders["Content-Type"] = "application/json";
  }

  const response = await fetch(resolveUrl(path, query), {
    method,
    headers: requestHeaders,
    body:
      hasBody && body instanceof FormData
        ? body
        : hasBody
        ? JSON.stringify(body)
        : undefined,
    signal,
  });

  const payload = await parseResponseBody(response);

  if (!response.ok) {
    const message =
      (typeof payload === "object" && payload !== null && payload.message) ||
      `Request failed with status ${response.status}`;
    throw new ApiError(message, { status: response.status, data: payload });
  }

  return payload;
}

