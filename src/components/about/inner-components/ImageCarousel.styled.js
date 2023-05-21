import { elementsColors } from "../../../utils/consts";

const carousel = elementsColors.carouselButton;


export const CarouselBtn = ({ value, onClick }) => {
    return (
        <button style={{
            width: '12px',
            height: '12px',
            aspectRatio: '1/1',
            background: carousel?.background,
            color: carousel?.color,
            fontWeight: 400,
            fontSize: '48px',
            padding: '2%',
            fontFamily: 'monospace',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            marginInline: '1px',
            border: 'none',
            cursor: 'pointer',
        }}

            onClick={onClick}
            key={`${value}_${Math.random()}`}>

            {value}
        </button>
    );
};
export const CarouselDiv = ({ children }) => {
    return (
        <div style={{
            marginInline: '8%',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',

        }} >
            {children}
        </div>
    );
};

export const Image = ({ children, img, index }) => {
    return (
        <img
            key={`${img.id}_${index}`}
            src={img.img_src}
            alt={`Mars Rover ${img.id}`}
            title={` ${JSON.stringify(img?.rover)}`}
            style={{ marginInline:'1%',padding: '0.5%', width: '200px', aspectRatio: '1/1' }}
        >
            {children}
        </img>
    );
};