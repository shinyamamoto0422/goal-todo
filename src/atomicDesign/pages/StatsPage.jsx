import { SideBar } from "../templates/SideBar"
import HeatMap from "../atoms/heatMap/heatMap"

export const StatsPage = () => {
    return (
        <>
            <div class="bg-black2 flex h-screen">
                {/**サイドバー */}
                <SideBar />

                {/**サイドバー以外 */}
                <div class="h-full">
                    {/**トップバー */}
                    <div class="">
                        <p class="text-white1 h-12 ml-24 mt-2 w-screen text-3xl">ホーム</p>
                        <div class="border border-1 border-white3" />
                    </div>

                    <p class="text-9xl text-white1">つみあげ</p>
                    <HeatMap />
                </div>


            </div>
        </>
    )
}