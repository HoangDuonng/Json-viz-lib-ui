'use client';

export function LoginForm() {
  return (
    <form className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded border border-border px-3 py-2"
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        className="w-full rounded border border-border px-3 py-2"
      />
      <button type="submit" className="w-full rounded bg-primary py-2 text-white">
        Đăng nhập
      </button>
    </form>
  );
}
