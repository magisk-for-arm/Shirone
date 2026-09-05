import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "/assets/home/fix.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "arm",
	bio: "愛する人が皆愛を得ますように",
	links: [
		{
			name: "Bilibli",
			icon: "fa6-brands:bilibili", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://space.bilibili.com/1661848169",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/magisk-for-arm",
		},
	],
});
