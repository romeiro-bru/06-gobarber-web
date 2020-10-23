import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
    return ( 
        <Container >
            <Toast>
                <FiAlertCircle size={20} />
                <div>
                    <strong>Houve um erro</strong>
                    <p>Não foi possível fazer o login</p>
                </div>

                <button type="button">
                    <FiXCircle size={18} />
                </button>
            </Toast>

            <Toast type="success">
                <FiAlertCircle size={20} />
                <div>
                    <strong>Houve um erro</strong>
                    <p>Não foi possível fazer o login</p>
                </div>

                <button type="button">
                    <FiXCircle size={18} />
                </button>
            </Toast>

            <Toast type="error">
                <FiAlertCircle size={20} />
                <div>
                    <strong>Houve um erro</strong>
                    <p>Não foi possível fazer o login</p>
                </div>

                <button type="button">
                    <FiXCircle size={18} />
                </button>
            </Toast>
        </Container>
    );
};

export default ToastContainer;