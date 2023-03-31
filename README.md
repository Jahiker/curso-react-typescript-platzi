# CURSO DE REACT CON TYPESCRIPT PLATZI

## FORMAS DE CREAR UN COMPONENTE DE REACT CON TS

```
import type { FunctionComponent, FC } from "react"; 

export const RandomFox = (): JSX.Element => {
    return <img src="" alt="" />;
};

export const RandomFox1 = () => {
    return <img src="" alt="" />;
};

export const RandomFox2: FunctionComponent = () => {
    return <img src="" alt="" />;
};

export const RandomFox3: FC = () => {
    return <img src="" alt="" />;
};
```