import React from 'react'

import {Routes, Route, Navigate} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import HW7 from "../h7/HW7";
import HW8 from "../h8/HW8";
import HW9 from "../h9/HW9";
import HW10 from "../h10/HW10";
import HW11 from "../h11/HW11";
import HW12 from "../h12/HW12";
import {HW13} from "../h13/HW13";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PlUS: '/junior-plus'

    // add paths
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}

            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PlUS} element={<JuniorPlus/>}/>

                // add routes

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages

export const Junior = () => {

    return (
        <>
            <HW7/>
            <HW8/>
            <HW9/>
            <HW10/>
            <HW11/>
            <HW12/>
        </>
    )
}

export const JuniorPlus = () => {
    return (
        <>
            <HW13/>
        </>
    )


}
