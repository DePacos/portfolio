import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main";

type appPropsType = {
    dataBase: {
        menuData: {
                id: number;
                name: string;
                link: string;
            }[];
        skillsData: {
            id: number;
            iconId: string;
            name: string;
        }[];
        skillsButtonData: Array<string>,
    };
}

function App(props: appPropsType) {
    return (
        <div className="App">
            <Header menuData={props.dataBase.menuData}/>
            <Main
                skillsData={props.dataBase.skillsData}
                skillsButtonData={props.dataBase.skillsButtonData}
            />
        </div>
    );
}

export default App;
