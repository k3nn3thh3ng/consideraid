type Items = {
	foodRations: boolean;
	halalFoodRations: boolean;
	formulaMilk: boolean;
	babyDiaper: boolean;
	adultDiaper: boolean;
	proBonoTuition: boolean;
	proBonoMentorship: boolean;
	rehomingOfPets: boolean;
	schoolTextbooks: boolean;
	repaintingOfHouse: boolean;
	cleaningOfHouse: boolean;
};

type ItemsOptions = {
	optionLabel: string;
	optionValue: keyof Items;
}[];

export const ItemsList: ItemsOptions = [
	{
		optionLabel: "Food Rations",
		optionValue: "foodRations"
	},
	{
		optionLabel: "Halal Food Rations",
		optionValue: "halalFoodRations"
	},
	{
		optionLabel: "Formula Milk",
		optionValue: "formulaMilk"
	},
	{
		optionLabel: "Baby Diaper",
		optionValue: "babyDiaper"
	},
	{
		optionLabel: "Adult Diaper",
		optionValue: "adultDiaper"
	},
	{
		optionLabel: "Pro-Bono Tuition",
		optionValue: "proBonoTuition"
	},
	{
		optionLabel: "Pro-Bono Mentorship",
		optionValue: "proBonoMentorship"
	},
	{
		optionLabel: "Rehoming of Pets",
		optionValue: "rehomingOfPets"
	},
	{
		optionLabel: "School Textbooks",
		optionValue: "schoolTextbooks"
	},
	{
		optionLabel: "Repainting of House",
		optionValue: "repaintingOfHouse"
	},
	{
		optionLabel: "Cleaning of House",
		optionValue: "cleaningOfHouse"
	}
];
