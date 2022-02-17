import { TopBarText } from "../..//organisms/TopBarText"
import { Link } from "react-router-dom"
import FocusIcon from "../../../assets/Focus/FocusIcon.svg"
import { ButtonPurple4 } from "../../atoms/button/ButtonPurple4"
import Timer from '../../../assets/Focus/Timer.svg'

export const Focus = () => {
    return (
        <>
            <div class="bg-black2 flex h-screen">
                <div class="h-full w-full">
                  {/* 画面幅を小さくしたときは、タスクが時計の上に来るようにする */}
                  {/* アイコンとタイトル */}
                  <div class="flex items-center">
                    <img src={FocusIcon} alt="FocusIcon" />
                    <span class="text-white1 text-3xl">
                        集中モード
                    </span>
                  </div>
                  {/* やることエリア */}
                  <div class="bg-black1 w-1/4 rounded-lg py-2 px-5">
                    <input type="text" class="px-3 text-base bg-transparent rounded-md border-none focus:outline-none" />
                    <p class="text-white3">期限</p>
                    <input type="text" class="px-3 text-base bg-transparent rounded-md border-none focus:outline-none" />
                    <p class="text-white3">優先度</p>
                    <input type="text" class="px-3 text-base bg-transparent rounded-md border-none focus:outline-none" />
                    <p class="text-white3">目標</p>
                    <p class="text-white3">想定所要時間</p>
                    <p class="text-purple4">1時間</p>
                  </div>
                  <br />
                  {/* タイマー */}
                  <section class="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/3">
                    {/* 時計 */}
                    <div>
                      <p class="text-purple4 text-sm">25分タイマー</p>
                      <img src={Timer} alt="" />
                      <p class="text-purple4 text-3xl">07:09</p>
                    </div>
                    {/* 時間表示 */}
                    <div class="bg-black1 rounded-lg py-2 px-5">
                      <p class="text-white3">残り時間</p>
                      <p class="text-purple4 text-base">53:11</p>
                      <ButtonPurple4 content={"終了"} />
                    </div>
                    {/* ボタン */}
                      <ButtonPurple4 content={"スタートする"}/>
                      <ButtonPurple4 content={"ストップ"}/>
                      <ButtonPurple4 content={"リセット"}/>
                  </section>
                </div>
                <Link to="/home">
                    <TopBarText title={"戻る"}/>
                </Link>
            </div>
        </>
    )
}