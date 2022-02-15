import { SideBar } from "../templates/SideBar"
import HeatMap from "../atoms/heatMap/heatMap"
import { TopBarText } from "../organisms/TopBarText"
import { TopBarBorder } from "../../common/TopBarBorder"

export const StatsPage = () => {
    return (
        <>
            <div class="bg-black2 flex h-screen">
                {/**サイドバー */}
                <SideBar />
                {/**サイドバー以外 */}
                <div class="h-full w-full">
                    {/**トップバー */}
                    <TopBarText title={"Stats"}/>
                    <TopBarBorder/>
                    <HeatMap/>
                </div>
            </div>
        </>
    )
}