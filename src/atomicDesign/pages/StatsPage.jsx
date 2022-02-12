import { SideBar } from "../templates/SideBar"
import HeatMap from "../atoms/heatMap/heatMap"
import { TopBar } from "../organisms/TopBar"

export const StatsPage = () => {
    return (
        <>
            <div class="bg-black2 flex h-screen">
                {/**サイドバー */}
                <SideBar />
                {/**サイドバー以外 */}
                <div class="h-full">
                    {/**トップバー */}
                    <TopBar title={"Stats"}/>
                    <p class="text-9xl text-white1">つみあげ</p>
                    <HeatMap />
                </div>
            </div>
        </>
    )
}