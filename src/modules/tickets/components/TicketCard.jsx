import { useSelector } from "react-redux";
import ManagementActionForm from "../forms/ManagementActionForm";
import AuditorDecisionForm from "../forms/AuditorDecisionForm";
import LeadershipCommentForm from "../forms/LeaderShipCommentForm";


const TicketCard = ({ ticket }) => {
    const { role } = useSelector((state) => state.auth);

    return (
        <div
            id={`ticket-${ticket.id}`}
            data-testid={`ticket-card-${ticket.id}`}
            className="card bg-base-200 p-4 mb-4 shadow"
        >
            <h4 className="font-bold text-lg mb-1">{ticket.title}</h4>
            <p className="text-sm mb-2">{ticket.description}</p>

            <div className="flex gap-2 mb-2">
                <span className="badge badge-outline">{ticket.priority}</span>
                <span className="badge badge-info">{ticket.status}</span>
            </div>

            {/* LEADERSHIP VIEW */}
            {role === "LEADERSHIP" && ticket.status === "SUBMITTED" && (
                <LeadershipCommentForm ticket={ticket} />
            )}

            {/* MANAGEMENT VIEW */}
            {role === "MANAGEMENT" && ticket.status === "FORWARDED_TO_MANAGEMENT" && (
                <ManagementActionForm ticket={ticket} />
            )}

            {/* AUDITOR VIEW */}
            {role === "AUDITORS" && ticket.status === "ACTION_TAKEN" && (
                <AuditorDecisionForm ticket={ticket} />
            )}
        </div>
    );
};

export default TicketCard;
