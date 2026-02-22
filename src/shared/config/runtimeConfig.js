const requiredEnv = ["VITE_API_BASE_URL"];

const getEnv = (key, fallback = "") => {
  const value = import.meta.env[key];
  if (value === undefined || value === null || value === "") {
    return fallback;
  }
  return value;
};

requiredEnv.forEach((key) => {
  if (!import.meta.env[key]) {
    // Keep warning non-blocking during migration; strict validation can be enabled later.
    console.warn(`[runtime-config] Missing ${key} in environment variables.`);
  }
});

export const runtimeConfig = Object.freeze({
  appName: getEnv("VITE_APP_NAME", "Siqah Frontend"),
  appEnv: getEnv("VITE_APP_ENV", "development"),
  apiBaseUrl: getEnv("VITE_API_BASE_URL", "http://localhost:8000/api"),
  enableMock: getEnv("VITE_ENABLE_MOCK", "false") === "true",
});
