import { SideBar } from "../templates/SideBar"


export const Page404 = () => {
    return (
        <>
            <div class="bg-black2 flex">
                {/**サイドバー */}
                <SideBar />


                {/**サイドバー以外 */}
                <div class="h-full">
                    {/**トップバー */}
                    <div class="">
                        <p class="text-white1 h-12 ml-24 mt-2 w-screen text-3xl">ホーム</p>
                        <div class="border border-1 border-white3" />
                    </div>

                    <div class="text-purple1 text-4xl bg-black1 h-screen w-screen">
                        <h1>404 not found</h1>
                    </div>

                </div>
            </div>
        </>
    )
}