import { elementsColors } from "../../utils/consts";

const titleColor = elementsColors.titleColor;
const buttonColor = elementsColors.buttonColor;
const paginate = elementsColors.pagniate;

export const Title = ({ children }) => {
    return <h1 style={{ color: titleColor }}>{children}</h1>;
};

export const ImagesGrid = ({ children }) => {
    return <div style={{ width: '80%', height: '100%', display: 'flex', flexWrap: 'wrap', marginBlock: '1%' }}>{children}</div>;
};

export const Image = ({ children, img, index }) => {
    return (
        <img
            key={`${img.id}_${index}`}
            src={img.img_src}
            alt={`Mars Rover ${img.id}`}
            title={` ${JSON.stringify(img?.rover)}`}
            style={{ padding: '0.5%', width: '200px', aspectRatio: '1/1' }}
        >
            {children}
        </img>
    );
};

export const Button = ({ children, onClick }) => {
    return (
        <button style={{
            background: buttonColor,
            color: titleColor,
            paddingInline: '2.3%',
            paddingBlock: '2.8%',
            borderRadius: '8px',
            border: 'none',
            margin: '1%',
            width: 'fit-content',
            cursor: 'pointer',
            fontWeight: 600,
        }}
            onClick={onClick}>
            {children}
        </button>
    );
};

