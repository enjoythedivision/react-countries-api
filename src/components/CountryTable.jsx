export default function CountryTable({countries}) {

    const tableData = countries.map((c) => (
        <tr>
            <td>
                <img src={c.flags.png ? c.flags.png : "No image available"}/>
            </td>
            <td>
                {c.name.common}
            </td>
            <td>
                {c.capital || "N/A"}
            </td>
            <td>
                {c.population}
            </td>
            <td>
                <a href={c.maps.googleMaps} target="_blank">
                    View map
                </a>
            </td>
            <td>
                {c.independent === false ? "No" : "Yes"}
            </td>
        </tr>
    ))

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Population</th>
                        <th>Map</th>
                        <th>Indepedent?</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    );
}