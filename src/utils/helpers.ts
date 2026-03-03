export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('vi-VN').format(new Date(date));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
