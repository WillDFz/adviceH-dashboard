"use client";
import { useState } from "react";
import json from "../../../json/appointments.json";

const DashboardTable = ({ title }) => {
    const [appointments, setAppointments] = useState(json);

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
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td className="thead">
                                <input type="checkbox" />
                            </td>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.birthdate}</td>
                            <td>{appointment.attendingDoctor}</td>
                            <td>{appointment.appointmentDate}</td>
                            <td>{appointment.appointmentTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardTable;
