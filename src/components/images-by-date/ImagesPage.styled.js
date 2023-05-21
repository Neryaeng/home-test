import { elementsColors } from "../../utils/consts";

const searchInput = elementsColors.searchInput;
const searchBtn = elementsColors.searchButton;
export const Container = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            textAlign: 'left',
            width: '90%',
            paddingInline: '5%',
            minHeight: '100vh',

        }}>  {children}</div>
    );
};


export const SearchInput = ({ children, onChange, value }) => {
    return (
        <input style={{
            color: searchInput?.color,
            background: searchInput?.background,
            border: `1px solid ${searchInput?.border}`,
            borderRadius: '5px 0px 0px 5px'
        }}
            type="text"
            placeholder="Please enter date"
            value={value}
            onChange={onChange}
        />

    );
};

export const SearchButton = ({ children, onClick, value }) => {
    return (
        <button style={{
            color: searchBtn?.color,
            background: searchBtn?.background,
            border: `1px solid ${searchBtn?.border}`,
            borderRadius: '0px 5px 5px 0px',
            fontWeight: 600,
        }}
            value={value}
            onClick={onClick}
        >{children}</button>

    );
};

export const SearchDiv = ({ children, onClick, value }) => {
    return (
        <div style={{
            display: 'inline-flex', marginBlock: '2%'
        }}
            value={value}
            onClick={onClick}
        >{children}</div>

    );
};

export const Footer = ({ children }) => {
    return (
        <footer
            style={{ marginTop: 'auto' }}
        >{children}</footer>
    );
};

export const dummyImages = [
    {
      "id": 771812,
      "sol": 2929,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/msss/02929/mcam/2929MR0152820031300852C00_DXXX.jpg",
            "earth_date": "2020-11-01",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    },
    {
      "id": 771813,
      "sol": 2929,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FRB_657515400EDR_F0830306FHAZ00206M_.JPG",
      "earth_date": "2020-11-01",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }, {
      "id": 771813,
      "sol": 2929,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FRB_657515400EDR_F0830306FHAZ00206M_.JPG",
      "earth_date": "2020-11-01",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }, {
      "id": 771813,
      "sol": 2929,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FRB_657515400EDR_F0830306FHAZ00206M_.JPG",
      "earth_date": "2020-11-01",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }, {
      "id": 771813,
      "sol": 2929,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FRB_657515400EDR_F0830306FHAZ00206M_.JPG",
      "earth_date": "2020-11-01",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }, {
      "id": 771813,
      "sol": 2929,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FRB_657515400EDR_F0830306FHAZ00206M_.JPG",
      "earth_date": "2020-11-01",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }, {
      "id": 771813,
      "sol": 2929,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FRB_657515400EDR_F0830306FHAZ00206M_.JPG",
      "earth_date": "2020-11-01",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }, {
      "id": 771813,
      "sol": 2929,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FRB_657515400EDR_F0830306FHAZ00206M_.JPG",
      "earth_date": "2020-11-01",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }, {
      "id": 771813,
      "sol": 2929,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FRB_657515400EDR_F0830306FHAZ00206M_.JPG",
      "earth_date": "2020-11-01",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }, {
      "id": 771813,
      "sol": 2929,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FRB_657515400EDR_F0830306FHAZ00206M_.JPG",
      "earth_date": "2020-11-01",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }, {
      "id": 771813,
      "sol": 2929,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FRB_657515400EDR_F0830306FHAZ00206M_.JPG",
      "earth_date": "2020-11-01",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }, {
      "id": 771813,
      "sol": 2929,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02929/opgs/edr/fcam/FRB_657515400EDR_F0830306FHAZ00206M_.JPG",
      "earth_date": "2020-11-01",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    },]