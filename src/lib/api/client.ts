// Placeholder fetch wrapper for future backend
export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  const res = await fetch(`${baseUrl}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return res.json() as Promise<T>;
}
