import { useEffect, useState } from "react";
import { Appbar } from "../../components/generic/appbar/Appbar";
import { getAid, AidsPayload } from "../../api/backend";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/generic/loading/spinner";
import { AidDisplay } from "../../components/specific/aidDisplay/AidDisplay";

const Edit = (): JSX.Element => {
	let { aidId } = useParams();
	const [info, setInfo] = useState<AidsPayload | undefined>(undefined);
	useEffect(() => {
		const fetchData = async () => {
			if (aidId) {
				const aidInfo = await getAid(aidId);
				console.log(aidInfo.payload);
				setInfo(aidInfo.payload);
			}
		};
		fetchData();
	}, [aidId]);

	return (
		<div>
			<Appbar />
			{!info ? <Spinner /> : <AidDisplay data={info} />}
		</div>
	);
};

export { Edit };
