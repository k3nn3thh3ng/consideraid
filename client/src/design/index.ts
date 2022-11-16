type Size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export const spacing = (size: Size) => {
	switch (size) {
		case "lg":
			return "48px";
		default:
			return "16px";
	}
};
