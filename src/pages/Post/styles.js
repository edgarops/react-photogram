import styled from 'styled-components';

export const Container = styled.div`
    max-width: 900px;
    max-height: 700px;
    width: 100%;
    height: 100%;
    padding-top: 100px;
    margin: 0 auto;
    display: flex;
    
    @media (max-width:900px) {
        
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
        padding-top: 100px;
        margin: 0 auto;
        display: flex;
  }
  @media (max-width:550px) {
        //background-color:red;
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
        padding-top: 100px;
        margin: 0 auto;
        display: grid;
  }
`;

export const ContainerPhoto = styled.div`
    background-color: #f6f6f6;
    width: 100%;
    max-width: 600px;
    max-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e6e6e6;
    border-radius: 5px;

    @media (max-width:900px) {
        background-color: #f6f6f6;
        width: 80%;
        max-width: 60%;
        max-height: 70%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        margin: 0;
  }

  @media (max-width:550px) {
        //display: inline-block ;
        margin-top:-11px;
        background-color: #f6f6f6;
        align-items: center;
        justify-content: center;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        margin-left: 1px;
        margin-right: -1px;
        width: 100%;
        height: 90%;//mover imagen
        max-width: 500px;
        max-height: 500px;
        
    }
`;
export const Img = styled.img`
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: center;

    @media (max-width:900px) {
        width: 100%;
        height: 100%;

        object-fit: contain;
        object-position: center;
    }

    @media (max-width:550px) {
        width: 100%;
        height: 100%;

        object-fit: contain;
        object-position: center;

    }
`;

export const ContainerPost = styled.div`
    width: 100%;
    max-width: 300px;
    background: #fff;
    border-radius: 5px;

    @media (max-width:900px) {
        width: 40%;
        max-width:40%;
        height: 70%;
        background: #fff;
        border-radius: 5px;
        
    }
    @media (max-width:550px) {
        //display: none;
        margin-top:-220px auto;
        width: 100%;
        max-width:100%;
        height: 100%;
        background: #fff;
        border-radius: 5px;
        //text-align: left;
    }
`;

export const HeaderPost = styled.div`
    padding: 10px 16px;
    
    font: 400 14px 'Roboto';
    border-bottom: 1px solid #e6e6e6;
    
    
    @media (max-width:1000px) {
        padding: 8px 10px;
        
        font: 400 14px 'Roboto';
        border-bottom: 1px solid #e6e6e6;
        && .div, .div2{
            width: 46%;
        }
    }
    @media (max-width:900px) {
        padding: 8px 10px;
        
        font: 400 14px 'Roboto';
        border-bottom: 1px solid #e6e6e6;
        && .div, .div2{
            width: 40%;
        }
    }
    @media (max-width:800px) {
        padding: 8px 10px;
        
        font: 400 14px 'Roboto';
        border-bottom: 1px solid #e6e6e6;
        && .div, .div2{
            width: 50%;
        }
    }
    @media (max-width:640px) {
        //display:inline-block;
        padding: 10px 16px;
        width: 100%;
    font: 400 14px 'Roboto';
    border-bottom: 1px solid #e6e6e6;

        && .div, .div2{
            width: 62%;
        }
       
    }
    @media (max-width:550px) {
        //display:inline-block;
        padding: 10px 16px;
        width: 100%;
    font: 400 14px 'Roboto';
    border-bottom: 1px solid #e6e6e6;

        && .div, .div2{
            width: 25%;
        }
       
    }
    @media (max-width:450px) {
        //display:inline-block;
        padding: 10px 16px;
        width: 100%;
    font: 400 14px 'Roboto';
    border-bottom: 1px solid #e6e6e6;

        && .div, .div2{
            width: 30%;
        }
       
    }
`;

export const ContainerComments = styled(HeaderPost)`
    max-height: 400px;
    min-height: 400px;
    overflow: auto;
    //height: 85%;

    div{
        //margin: 5px;
    }

    ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
`

export const TimeStyle= styled.span`
    color: #999999;
    font-size: 10px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
`

export const ContainerOptions = styled(HeaderPost)``

export const ContainerComment = styled.div``