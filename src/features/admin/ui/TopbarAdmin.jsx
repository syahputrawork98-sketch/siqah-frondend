import { BackofficeTopbar } from "@/shared/ui";

export default function TopbarAdmin() {
  const profile = {
    name: "Admin Siqah",
    email: "admin@siqah.id",
    avatar:
      "https://ui-avatars.com/api/?name=Admin+Siqah&background=e2b97f&color=fff",
  };

  return (
    <BackofficeTopbar
      panelRole="Admin"
      profile={profile}
      notificationCount={5}
      notifications={[]}
    />
  );
}
