
export const MainImage = ({ children, src }) => {
    return (
        <img
            src={src}
            alt={`Mars Rover`}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'fill'
            }}>
            {children}
        </img>
    );
};

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

export const MainDiv = ({ children }) => {
    return (
        <div style={{
            display: 'flex', maxHeight: '568px'
        }}>  {children}</div>
    );
};

export const ImageDiv = ({ children }) => {
    return (
        <div style={{ padding: '3%', flex: 1, }}> {children}</div>
    );
};

export const InformationDiv = ({ children }) => {
    return (
        <div style={{ padding: '3%', flex: 1, display: 'block' }}>
            {children}</div>
    );
};
export const TextDiv = ({ children }) => {
    return (
        <div style={{ overflow: 'auto', flexDirection: 'column', flex: 1 }}>
            {children}</div>
    );
};

export const CarouselTitle = ({ children }) => {
    return (
        <p style={{ fontSize: '22px', fontWeight: '600', marginInline: '3%' }}>
            {children}</p>
    );
};



export const Span = ({ children ,winWidth}) => {
    return (
        <span style={{ padding: '2%', fontWeight: '600', fontSize:winWidth>768? '18px':'11px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            {children}
        </span>
    );
};





