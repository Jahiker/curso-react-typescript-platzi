# CURSO DE REACT CON TYPESCRIPT PLATZI

## FORMAS DE CREAR UN COMPONENTE DE REACT CON TS

```
import type { FunctionComponent, FC } from "react";

<!-- Forma explicita (Forma recomendada) -->
export const RandomFox = (): JSX.Element => {
    return <img src="" alt="" />;
};

<!-- Forma inferida -->
export const RandomFox1 = () => {
    return <img src="" alt="" />;
};

<!-- Tipando desde React (Se usaba mas antes) -->
export const RandomFox2: FunctionComponent = () => {
    return <img src="" alt="" />;
};

<!-- Tipando desde React (Se usaba mas antes) -->
export const RandomFox3: FC = () => {
    return <img src="" alt="" />;
};
```

## FORMAS DE TIPAR LAS PROPS DE REACT CON TYPESCRIPT

```
<!-- Esta forma se puede usar para componentes con pocas props -->
export const RandomFox = (props: { image: string }): JSX.Element => {
  return <img src={props.image} alt="" width={320} height={"auto"} className="mx-auto my-5 rounded-md" />;
};

<!-- Esta forma es la mas usada -->
type Props = {
    image: string
}

export const RandomFox = ({ image }: Props): JSX.Element => {
  return <img src={image} alt="" width={320} height={"auto"} className="mx-auto my-5 rounded-md" />;
};
```

## FORMAS DE TIPAR UN ESTADO

- Se recomienda usar genericos para tipar los estados en React

```
const [images, setImages] = useState<string[]>([`Hola`,`React`,`Typescript`,`Platzi`,]);
const [images, setImages] = useState<Array<string>>([`Hola`,`React`,`Typescript`,`Platzi`,]);
const [counter, setCounter] = useState<number>(0);
```

- Tipado de estados con tipos no primitivos

```
interface ImageItems {
  id: string,
  url: string
}

const [images, setImages] = useState<ImageItems[]>([{id: '12dsa4', url: `https://randomfox.ca/images/image.jpg`}]);
```

## TIPOS PARA EVENTOS Y CALLBACKS DE LISTENERS

- La forma mas sencilla para principiantes
```
const addNewFox = (event: { preventDefault: () => void, target: HTMLElement }) => {
    event.preventDefault();
    const target = event.target;
}
```

- La forma profesional es importando el evento corespondiente desde React
```
 const addNewFox: MouseEventHandler<HTMLButtonElement> = (event): void => {
    event.preventDefault();

    const target = event.target;
  };
```

## TIPADO PARA REFERENCIAS Y OBSERVADORES

- El use ref siempre debe tiparse con el tipo de elemento que lleva la referencia y debe inicilizarse con null
```
  const node = useRef<HTMLImageElement>(null)
```
