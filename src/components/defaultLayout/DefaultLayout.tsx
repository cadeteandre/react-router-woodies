import "./DefaultLayout.css";

interface IDefaultLayoutProps {
    imgUrl: string,
    pText: string
}

const DefaultLayout: React.FC<IDefaultLayoutProps> = (props) => {
    return (  
        <div className="default__description">
            <img src={props.imgUrl} alt={props.imgUrl} />
            <p>{props.pText}</p>
        </div>
    );
}

export default DefaultLayout;