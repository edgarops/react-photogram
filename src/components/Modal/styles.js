import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const StyledModal = Modal.styled`
    width: 20rem;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    opacity: ${props => props.opacity};
    transition: opactity ease 500ms;
    border-radius: .5rem;

`;

export const MoreOptions = styled.ul`
  width: 100%;
  text-align: center;
  color: #2c2c2c;
  font-weight: bold;
  font-size: 14px;

  li {
    list-style: none;
    padding: 20px;
    border-bottom: 1px solid #e6e6e6;
    border-radius: 10px;
    cursor: pointer;
    a {
      text-decoration: none;
      color: #2c2c2c;
    }
    transition: all 250ms ease-in-out;
    &.red {
      color: #fc4850;
    }
    &:hover {
      background-color: #e6e6e6;
    }
  }
`;

export const Button = styled.button`
    float: right;
    
    padding: 12px;
    margin:15px;
    font-weight: bold;
    background: ${props => (props.error ? "#fc4650" : "#3897f0")};
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    position: relative; //acomodar encima
    top: 2px;
    height: 40px;
    width: 80px;
    margin-top: -60px;

    /*@media (max-width:640px){ ///Ventana pequeña
      position: absolute; //acomodar encima
    top: 58.3%;
    left: 59.7%;
  } 

  @media (max-width:490px){ ///smartphones
      position: absolute; //acomodar encima
      top: 55.7%;
    left: 62%;
    
  } 

  @media (min-width: 800px) { ///Ventana mediana 
    position: absolute; //acomodar encima
    top: 58.3%;
    left: 55.6%;
    
  }

  @media (min-width: 850px) { ///Ventana mediana 
    position: absolute; //acomodar encima
    top: 90%;
    left: 55.6%;
    
  }

    @media (min-width: 1000px) { ///Tamaño pantallas 1080p
    position: absolute; //acomodar encima
    top: 55.2%;
    left: 52.5%;
    
  }

  @media (min-width: 2000px) { ///Tamaño pantallas 1440p
    position: absolute; //acomodar encima
    top: 53.7%;
    left: 51.95%;
    
  }*/



    
`
export const Div = styled.div`
    width: 100%;
    padding: 2px;
    
`