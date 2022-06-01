import './App.css';
import { useEffect, useState } from "react";

function App() {
    const [ratio, setRatio] = useState(1);
    const [height, setHeight] = useState('');
    const [topHeight, setTopHeight] = useState('');
    const [middleHeight, setMiddleHeight] = useState('');
    const [bottomHeight, setBottomHeight] = useState('');
    const [newHeight, setNewHeight] = useState('');
    const [heightWindow, setHeightWindow] = useState('');
    const [topHeightWindow, setTopHeightWindow] = useState('');
    const [middleHeightWindow, setMiddleHeightWindow] = useState('');
    const [bottomHeightWindow, setBottomHeightWindow] = useState('');

    const onClick = () => {
        setRatio(newHeight / height);
        setHeightWindow(height);
        setTopHeightWindow(topHeight);
        setMiddleHeightWindow(middleHeight);
        setBottomHeightWindow(bottomHeight);
    };

    return (
        <div className="app">
            <div className={'form'}>
                <Input
                    label={'Высота окна'}
                    placeholder={'Высота окна'}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <div className={'new'}>
                    <Input
                        label={'Высота верхней секции'}
                        placeholder={'Высота верхней секции'}
                        value={topHeight}
                        onChange={(e) => setTopHeight(e.target.value)}
                        color={'rgba(220, 190, 150, 0.4)'}
                    />
                    {
                        topHeightWindow !== '' &&
                        <p style={{fontWeight: 'bold', height: '2px'}}>-->  {topHeightWindow * ratio}</p>
                    }
                </div>
                <div className={'new'}>
                    <Input
                        label={'Высота средней секции'}
                        placeholder={'Высота средней секции'}
                        value={middleHeight}
                        onChange={(e) => setMiddleHeight(e.target.value)}
                        color={'rgba(40, 150, 130, 0.4)'}
                    />
                    {
                        middleHeightWindow !== '' &&
                        <p style={{fontWeight: 'bold', height: '2px'}}>-->  {middleHeightWindow * ratio}</p>
                    }
                </div>
                <div className={'new'}>
                    <Input
                        label={'Высота нижней секции'}
                        placeholder={'Высота нижней секции'}
                        value={bottomHeight}
                        onChange={(e) => setBottomHeight(e.target.value)}
                        color={'rgba(100, 200, 220, 0.4)'}
                    />
                    {
                        bottomHeightWindow !== '' &&
                        <p style={{fontWeight: 'bold', height: '2px'}}>-->  {bottomHeightWindow * ratio}</p>
                    }
                </div>
                <Input
                    label={'Высота нового окна'}
                    placeholder={'Высота нового окна'}
                    value={newHeight}
                    onChange={(e) => setNewHeight(e.target.value)}
                />
                <button
                    className={'button'}
                    onClick={onClick}
                    disabled={!height || !topHeight || !middleHeight || !bottomHeight || !newHeight}
                >
                    Расчитать
                </button>
            </div>
            <div className={'windows'}>
                <Window
                    ratio={1}
                    height={heightWindow}
                    topHeight={topHeightWindow}
                    middleHeight={middleHeightWindow}
                    bottomHeight={bottomHeightWindow}
                />
                <Window
                    ratio={ratio}
                    height={heightWindow * ratio}
                    topHeight={topHeightWindow * ratio}
                    middleHeight={middleHeightWindow * ratio}
                    bottomHeight={bottomHeightWindow * ratio}
                />
            </div>
        </div>
    );
}

export default App;

const Input = ({
    value,
    placeholder,
    label,
    color,
    error,
    onChange,
}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <p className={'input-label'}>{label}</p>
            <input
                className={'input'}
                placeholder={placeholder}
                value={value}
                style={{background: color, border: `2px solid ${error ? 'red' : 'rgb(56, 56, 56)'}`}}
                onChange={onChange}
                type={'number'}
            />
        </div>
    );
}

const Window = ({
    ratio,
    height,
    topHeight,
    middleHeight,
    bottomHeight
}) => {
    const topHeightBasic = 120 * topHeight / height || 80;
    const middleHeightBasic = 120 * middleHeight / height || 80;
    const bottomHeightBasic = 120 * bottomHeight / height || 80;

    return (
        <div className={'window-with-size'}>
            <p>{Math.round(height)}</p>
            <div
                className={'window'}
            >
                <div className={'window-with-size'}>
                    <p>{Math.round(topHeight)}</p>
                    <div
                        className={'window-section window-top'}
                        style={{height: topHeightBasic * ratio + 'px'}}
                    />
                </div>
                <div className={'window-with-size'}>
                    <p>{Math.round(middleHeight)}</p>
                    <div
                        className={'window-section window-middle'}
                        style={{height: middleHeightBasic * ratio + 'px'}}
                    />
                </div>
                <div className={'window-with-size'}>
                    <p>{Math.round(bottomHeight)}</p>
                    <div
                        className={'window-section window-bottom'}
                        style={{height: bottomHeightBasic * ratio + 'px'}}
                    />
                </div>
            </div>
        </div>
    );
}
