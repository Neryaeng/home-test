import { elementsColors } from "../../utils/consts";

const paginate = elementsColors.pagniate;


export const PaginateBtn = ({ disabled, value, currentIndex, onClick }) => {
    return (
        <button style={{
            width: '12px',
            height: '12px',
            aspectRatio: '1/1',
            background: disabled ? 'grey' : value === currentIndex ? paginate?.clickedBG : paginate?.defaultBG,
            color: value === currentIndex ? paginate?.defaultBG : paginate?.color,
            padding: '1.8%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            marginInline: '1px',
            border: `1px solid ${paginate?.border}`,
            cursor: disabled ? 'not-allowed' : 'pointer',
        }}
            disabled={disabled}
            onClick={onClick}
            key={`${value}_${Math.random()}`}>

            {value}
        </button>
    );
};

export const Container = ({ children }) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          flexDirection: 'row', // Added flexDirection property
          marginBottom: '10%',
          marginRight: '25%'
        }}
      >
        {children}
      </div>
    );
  };