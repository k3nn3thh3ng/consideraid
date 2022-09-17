type AreasListType = {
	optionLabel: string;
	optionValue: string | number;
}[];

const PLANNING_AREAS_SG =
	"Ang Mo Kio,Bedok,Bishan,Boon Lay,Bukit Batok,Bukit Merah,Bukit Panjang,Bukit Timah,Central Water Catchment,Changi,Changi Bay,Choa Chu Kang,Clementi,Downtown Core,Geylang,Hougang,Jurong East,Jurong West,Kallang,Lim Chu Kang,Mandai,Marina East,Marina South,Marine Parade,Newton,North-Eastern Islands,Novena,Orchard,Outram,Pasir Ris,Paya Lebar,Pioneer,Punggol,Queenstown,River Valley,Rochor,Seletar,Sembawang,Sengkang,Serangoon,Simpang,Singapore River,Southern Islands,Straits View,Sungei Kadut,Tampines,Tanglin,Tengah,Toa Payoh,Tuas,Western Islands,Western Water Catchment,Woodlands,Yishun";

export const AreaList: AreasListType = PLANNING_AREAS_SG.split(",").map(
	(area) => {
		return { optionLabel: area, optionValue: area };
	}
);
