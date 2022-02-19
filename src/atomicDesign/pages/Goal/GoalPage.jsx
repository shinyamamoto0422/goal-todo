import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { TopBarBorder } from '../../../common/TopBarBorder';
import { TopBarText } from '../../organisms/TopBarText';
import { SideBar } from "../../templates/SideBar"
import { Accordion } from './Accordion';
import { Start } from './Accordion/Start';
import { Step1 } from './Accordion/Step1';
// import { ButtonPurple4 } from '../../atoms/button/ButtonPurple4'; 

export const GoalPage = () => {
    const goalList = [
        {
            id: 0,
            title : "まずはじめに",
            content: "目標設定をし、それを日々こなすことでより夢に近づくお手伝いをします。",
            placeholder: "",
            advice: "",
            example: "",
            isOpen: true,
            radius: "rounded-t-md",
        },
        {
            id: 1,
            title : "達成したい目標を掲げる",
            content: `あなたが自分の人生で達成したいゴールはなんですか？`,
            placeholder: '私が達成したい目標は…',
            advice: "人はイメージを超える結果は出すことができません。未来のイメージを大きくしましょう！とてつもなく大きな夢でも構いません。",
            example: "",
            isOpen: false,
        },
        {
            title : "達成した時の感情をあげる",
            content: "次に、その夢を叶えた自分を想像してみましょう。どんな感情が湧いていますか？",
            advice: "一見、意味のない作業と思えるかもしれません。ですが、夢や目標に対するモチベーションを左右するのはこの感情なのです。",
            example: "",
            isOpen: false,
        },
        {
            title : "目標を細かく分割する",
            content: "を叶えるために達成しないといけない中間目標はなんですか？（複数）",
            advice: "自分が中目標を達成して行った後に、LifeGoalが見えているのであれば多少飛躍していてもかまいません。",
            example: "",
            isOpen: false,
        },
        {
            title : "数値化してより現実的におとしこむ",
            content: "面倒ですが、もう一度、中間目標を『数値化』に着目して練り直しましょう！",
            advice: "目標を現実のものにするには、明確にすることが大切です。いつまでにやるのか、10個何かを達成するのか、この中間目標は最終目標のどれくらいの割合を占めるのかという風に具体化することで、実際の行動に移しやすくなります。",
            example: "",
            isOpen: false,
        },
        {
            title : "目標に近づくためのルーティンを作る",
            content: "最後に、目標に一歩づつ近づくために習慣化すること（ルーティン行動）を3つ上げましょう！",
            advice: "ルーティンとは「毎日欠かさず行うこと」です。最初は意識しないとできない苦しい行動であっても、続けていると、それは自動化でき日々目標に向かって行動できるようになります。まずは小さなことから始めましょう！",
            example: "",
            isOpen: false,
            radius: "rounded-b-md",
        },
    ];
    const step1Condition = false;
    
    // 関数をpropsで渡す

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
                        {/* <Link to="/goal/start">
                            <ButtonPurple4 content={"目標設定をする"} />
                        </Link> */}
                    <TopBarBorder/>
                </div>
                {/* アコーディオン */}
                <section class="mt-24 h-3/4">
                    <div class="relative h-full">
                        {/* アコーディオンの右側にabsoluteで絶対配置するので、relative消さないで */}
                        {/* {goalList.map((list, index) => (
                            <Accordion index={index} title={list.title} content={list.content} placeholder={list.placeholder} radius={list.radius}/>
                        ))} */}
                        <Start />
                        <Step1 />
                        
                    </div>
                </section>
            </div>
        </div>
    )
};