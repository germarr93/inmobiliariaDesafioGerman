
import { memo } from 'react';

const Encabezado = () => {
    //console.log('Encabezado');
    return (
        <div className="encabezado">
            <h1>Contadores</h1>
        </div>
    );
};

export default memo(Encabezado);