import { defineConfig } from "@/lib/config";

const useCloneBranding = true;

export default defineConfig({
  branding: {
    name: "promptsfarsi",
    logo: "/logo.svg",
    logoDark: "/logo-dark.svg",
    favicon: "/logo.svg",
    description: "اشتراک‌گذاری و کشف پرامپت‌های هوش مصنوعی",
  },

  theme: {
    radius: "sm",
    variant: "default",
    density: "default",
    colors: {
      primary: "#6366f1",
    },
  },

  auth: {
    providers: ["credentials", "github"],
    allowRegistration: true,
  },

  i18n: {
    locales: ["fa", "en"],
    defaultLocale: "fa",
  },

  features: {
    privatePrompts: true,
    changeRequests: true,
    categories: true,
    tags: true,
    aiSearch: false,
    aiGeneration: false,
    mcp: false,
    comments: true,
  },

  homepage: {
    useCloneBranding,
    achievements: {
      enabled: false,
    },
    sponsors: {
      enabled: false,
      items: [],
    },
  },
});
