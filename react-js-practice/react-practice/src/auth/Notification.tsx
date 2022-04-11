import './auth.css';

const Notification = ({message}) => {
    return(
        <div className="notifi">
            <h3 className="notifi-message">{message}</h3>
        </div>
    )
}

export default Notification;