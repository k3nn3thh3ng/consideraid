type Size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export const spacing = (size: Size) => {
	switch (size) {
		case "xxl":
			return "48px";
		case "xl":
			return "32px";
		case "lg":
			return "24px";
		default:
			return "16px";
	}
};
