import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { TopBarBorder } from '../../../common/TopBarBorder';
import { useGoal } from '../../../hooks/useGoal';
import { TopBarText } from '../../organisms/TopBarText';
import { SideBar } from "../../templates/SideBar"
import { Accordion } from './Accordion';
import { Start } from './Accordion/Start';
import { Step1 } from './Accordion/Step1';
import { Step2 } from './Accordion/Step2';
import { Step3 } from './Accordion/Step3';
import { Step4 } from './Accordion/Step4';
import { Step5 } from './Accordion/Step5';
// import { ButtonPurple4 } from '../../atoms/button/ButtonPurple4'; 

export const GoalPage = () => {
    const { 
        goalList,
        updateGoal,
    } = useGoal();
    const goalItemStep1 = goalList.find(item => item.goalName === "life goal");
    const goalItemStep2 = goalList.find(item => item.goalName === "feelings1");
    const goalItemStep3and4 = goalList.find(item => item.goalName === "intermediate goal1");
    const goalItemStep5 = goalList.find(item => item.goalName === "routine1");
    return (
        <div class="
            flex
            h-screen
            bg-gradient-to-t 
            from-blue1 via-blue2 to-blue3 
        ">
            <SideBar />
            <div class="h-full w-full flex-grow-1">
                {/* トップバー */}
                <div class="">
                    <TopBarText title={"Goal"}/>
                    <TopBarBorder/>
                </div>
                {/* アコーディオン */}
                <section class="mt-24 h-3/4">
                    <div class="relative h-full">
                        <Start />
                        <Step1 goal={goalItemStep1} updateGoal={updateGoal}/>
                        <Step2 goal={goalItemStep2} updateGoal={updateGoal}/>
                        <Step3 goal={goalItemStep3and4} step1InputGoal1={goalItemStep1} updateGoal={updateGoal}/>
                        <Step4 goal={goalItemStep3and4} updateGoal={updateGoal}/>
                        <Step5 goal={goalItemStep5} updateGoal={updateGoal}/>
                    </div>
                </section>
            </div>
        </div>
    )
};