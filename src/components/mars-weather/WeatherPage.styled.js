import { elementsColors } from "../../utils/consts";

const selectInput = elementsColors.selectInput;

export const Container = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            textAlign: 'left',
            width: '90%',
            paddingInline: '5%',
            minHeight: '80vh',
        }}>  {children}</div>
    );
};

export const WeatherDiv = ({ children }) => {
    return (
        <div style={{ margin: '0.5%', paddingLeft: '1.5%', paddingBlock: '0.5%', border: `1px solid ${selectInput?.border}`, width: '23%', }}>  {children}</div>
    );
};

export const Row = ({ children }) => {
    return (
        <div>  {children}</div>
    );
};


export const Footer = ({ children }) => {
    return (
        <footer
            style={{ marginTop: 'initial' }}
        >{children}</footer>
    );
};

export const Category = ({ children, value }) => {
    return (
        <span
            style={{ fontWeight: '600' }}
        >{value}</span>
    );
};

export const WeatherGrid = ({ children }) => {
    return (<div style={{ width: '90%', height: '100%', display: 'flex', flexWrap: 'wrap', margin: '1%' }}>{children}</div>
    );
};


export const SelectInput = ({ children, id, onChange, value }) => {
    return (
        <select style={{
            color: selectInput?.color,
            background: selectInput?.background,
            border: `1px solid ${selectInput?.border}`,
            borderRadius: '5px'
        }}
            id={id}
            value={value}
            onChange={onChange}
        />

    );
};

