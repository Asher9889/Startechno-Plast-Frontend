type THeading = {
    text1: string;
    text2?: string;
}

const Heading = ({text1, text2}:THeading) => {
    return (
        <h2 className="text-3xl md:text-4xl font-extrabold text-(--dark-blue-color) leading-tight text-center">{text1} 
             <span className="text-(--orange-button-color)">
                &nbsp;{text2}
            </span>
        </h2>
    )
}

export default Heading;