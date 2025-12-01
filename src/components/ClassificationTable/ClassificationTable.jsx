export default ({activeID}) => {
    // Define the classification data as an array
    const classificationsData = [
        { imc: "Menos de 17", classification: "Muito abaixo do peso", id:1 },
        { imc: "Entre 17 e 18,49", classification: "Abaixo do peso", id:2 },
        { imc: "Entre 18,5 e 24,99", classification: "Peso normal", id:3 },
        { imc: "Entre 25 e 29,99", classification: "Acima do peso", id:4 },
        { imc: "Entre 30 e 34,99", classification: "Obesidade I", id:5 },
        { imc: "Entre 35 e 39,99", classification: "Obesidade II (severa)", id:6 },
        { imc: "Acima de 40", classification: "Obesidade III (mórbida)", id:7 }
    ];

    return (
        <>
            <div className="flex justify-center items-center text-gray-50">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="bg-[#201f1f] px-4 py-2">IMC</th>
                            <th className="bg-[#201f1f] px-4 py-2">Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classificationsData.map((item, index) => (
                            <tr key={index}>
                                <td className={`bg-[#201f1f] ${item.id === activeID ? "bg-gray-700" : ""} px-4 py-2`}>{item.imc}</td>
                                <td className={`bg-[#201f1f] ${item.id === activeID ? "bg-gray-700" : ""} px-4 py-2`}>{item.classification}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
