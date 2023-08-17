import Image from "next/image";
const AppointmentsTable = () => {
    return (
        <section className="section-bg-light">
            <div className="title-container">Consulta de Agendamentos</div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Paciente</th>
                        <th>Médico</th>
                        <th>Especialidade</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2023-08-20</td>
                        <td>09:00</td>
                        <td>João Silva</td>
                        <td>Ana Rodrigues</td>
                        <td>Clínica Geral</td>
                        <td>Confirmada</td>
                        <td className="p-0">
                            <button className="btn">
                                <Image
                                    src="/svg/pen.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                            <button className="btn">
                                <Image
                                    src="/svg/search.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2023-08-20</td>
                        <td>10:30</td>
                        <td>Maria Oliveira</td>
                        <td>Carlos Santos</td>
                        <td>Dermatologia</td>
                        <td>Pendente</td>
                        <td className="p-0">
                            <button className="btn">
                                <Image
                                    src="/svg/pen.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                            <button className="btn">
                                <Image
                                    src="/svg/search.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2023-08-21</td>
                        <td>14:15</td>
                        <td>Pedro Souza</td>
                        <td>Laura Ferreira</td>
                        <td>Ortopedia</td>
                        <td>Confirmada</td>
                        <td className="p-0">
                            <button className="btn">
                                <Image
                                    src="/svg/pen.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                            <button className="btn">
                                <Image
                                    src="/svg/search.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2023-08-22</td>
                        <td>11:45</td>
                        <td>Ana Santos</td>
                        <td>João Mendes</td>
                        <td>Pediatria</td>
                        <td>Realizada</td>
                        <td className="p-0">
                            <button className="btn">
                                <Image
                                    src="/svg/pen.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                            <button className="btn">
                                <Image
                                    src="/svg/search.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2023-08-23</td>
                        <td>16:00</td>
                        <td>Carlos Oliveira</td>
                        <td>Sofia Almeida</td>
                        <td>Cardiologia</td>
                        <td>Confirmada</td>
                        <td className="p-0">
                            <button className="btn">
                                <Image
                                    src="/svg/pen.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                            <button className="btn">
                                <Image
                                    src="/svg/search.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2023-08-24</td>
                        <td>08:30</td>
                        <td>Lúcia Fernandes</td>
                        <td>André Costa</td>
                        <td>Ginecologia</td>
                        <td>Cancelada</td>
                        <td className="p-0">
                            <button className="btn">
                                <Image
                                    src="/svg/pen.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                            <button className="btn">
                                <Image
                                    src="/svg/search.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2023-08-24</td>
                        <td>15:30</td>
                        <td>Luís Mendonça</td>
                        <td>Helena Pereira</td>
                        <td>Oftalmologia</td>
                        <td>Confirmada</td>
                        <td className="p-0">
                            <button className="btn">
                                <Image
                                    src="/svg/pen.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                            <button className="btn">
                                <Image
                                    src="/svg/search.svg"
                                    className="icon-1x"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default AppointmentsTable;
