const DashboardTable = ({ title }) => {
    return (
        <div className="section-bg-light">
            <h4 className="mb-3">{title}</h4>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Selecionar paciente</th>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>Médico Responsável</th>
                        <th>Data do Agendamento</th>
                        <th>Horário do Agendamento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="thead">
                            <input type="checkbox" />
                        </td>
                        <td>João Silva</td>
                        <td>10/05/1985</td>
                        <td>Dra. Ana Santos</td>
                        <td>15/08/2023</td>
                        <td>14:30</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Maria Oliveira</td>
                        <td>22/09/1990</td>
                        <td>Dr. Carlos Lima</td>
                        <td>16/08/2023</td>
                        <td>10:00</td>
                    </tr>
                    <tr>
                        <td className="thead">
                            <input type="checkbox" />
                        </td>
                        <td>João Silva</td>
                        <td>10/05/1985</td>
                        <td>Dra. Ana Santos</td>
                        <td>15/08/2023</td>
                        <td>14:30</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Maria Oliveira</td>
                        <td>22/09/1990</td>
                        <td>Dr. Carlos Lima</td>
                        <td>16/08/2023</td>
                        <td>10:00</td>
                    </tr>
                    <tr>
                        <td className="thead">
                            <input type="checkbox" />
                        </td>
                        <td>João Silva</td>
                        <td>10/05/1985</td>
                        <td>Dra. Ana Santos</td>
                        <td>15/08/2023</td>
                        <td>14:30</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Maria Oliveira</td>
                        <td>22/09/1990</td>
                        <td>Dr. Carlos Lima</td>
                        <td>16/08/2023</td>
                        <td>10:00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DashboardTable;
