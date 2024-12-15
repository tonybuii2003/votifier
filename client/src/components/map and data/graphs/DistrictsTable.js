import { useContext, useState, useEffect } from "react";
import { MapStoreContext } from "../../../stores/MapStore";
import { stateCodeMapping } from "../../../utilities/FederalInfomationProcessingStandardEnumUtil";
import "../../../stylesheets/map and data/graphs/DistrictsTable.css";
export default function DistrictsTable(){
    const { store } = useContext(MapStoreContext);
    const [districtsData, setDistrictsData] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            var stateAbbreviation = stateCodeMapping[store.selectedStateCode];
            let response = await fetch_districts_summary(stateAbbreviation);
            console.log("Districts Table data fetched: ", response);
            setDistrictsData(response);
        };
        fetchData();
    }, [store.selectedStateCode]);

    useEffect(() => {
        console.log("Selected District: ", store.selectedDistrict);
        setSelectedDistrict(store.selectedDistrict);
    }, [store.selectedDistrict]);

    const fetch_districts_summary = async (stateAbbreviation) => {
        try{
            const response = await fetch(`http://localhost:8000/api/data/${stateAbbreviation}/districts/summary`);
            const json = await response.json();
            console.log("Districts Summary Data: ", json);
            return json;
        }catch(error){
            console.error(error.message);
        }
    }

    const handleRowClick = (district) => {
        console.log("District clicked: ", district);
        store.selectedDistrict = district;
        setSelectedDistrict(district);
    }

    return (
        <div className="districts-table-container">
            <table className="districts-table">
                <thead>
                    <tr className="districts-table-title">
                        <th>District</th>
                        <th>Representative</th>
                        <th>Party</th>
                        <th>Avg Household Income</th>
                        <th>Democratic %</th>
                        <th>Republican %</th>
                        <th>% Below Poverty</th>
                        <th>Rural %</th>
                        <th>Suburban %</th>
                        <th>Urban %</th>
                    </tr>
                </thead>
                <tbody>
                    {districtsData.data?.map((district, index) => (
                        <tr 
                            key={index}
                            className={selectedDistrict === district.CONG_DIST ? "highlighted" : ""}
                            onClick={() => handleRowClick(district.CONG_DIST)}
                        >
                            <td>{district.CONG_DIST}</td>
                            <td>{district.REPRESENTATIVE}</td>
                            <td>{district.PARTY}</td>
                            <td>{district.AVERAGE_HOUSEHOLD_INCOME}</td>
                            <td>{district.DEM_PERCENT}%</td>
                            <td>{district.REP_PERCENT}%</td>
                            <td>{district.PERCENT_BELOW_POVERTY}%</td>
                            <td>{district.RURAL_PERCENT}%</td>
                            <td>{district.SUBURBAN_PERCENT}%</td>
                            <td>{district.URBAN_PERCENT}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}