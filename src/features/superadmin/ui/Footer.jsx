import { getCurrentYear } from "@/shared/lib";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-3 px-6 text-sm text-gray-600 flex justify-between items-center mt-auto">
      <p>
        Â© {getCurrentYear()} <span className="font-semibold text-primary">Siqah Aqiqah</span>. Semua hak dilindungi.
      </p>
      <p className="hidden sm:block">
        Dibuat dengan ðŸ’š oleh <span className="font-medium">Tim Siqah Developer</span>
      </p>
    </footer>
  );
}


