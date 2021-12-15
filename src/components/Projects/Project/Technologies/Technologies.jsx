import "./Technologies.scss";

function Technologies({technology}) {
    return (
        <div className="technologies">
            <p className="technologies__text">
                {technology}
            </p>
        </div>
    )
}

export default Technologies
