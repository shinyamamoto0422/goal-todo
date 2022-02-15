import React from "react";
import "./heatMapColor.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";

//現在から8ヶ月前の日時
var dt = new Date();
dt.setMonth(dt.getMonth() - 8);
//

const HeatMap = () => {
    return (
        <div className="container">
            <div class="w-1/2">
                <CalendarHeatmap
                    // 表示させる月
                    startDate={new Date(dt)}
                    endDate={new Date()}
                    values={[
                        { date: "2022-01-03", count: 1 },
                        { date: new Date(), count: 2 },
                        { date: "2021-07-05", count: 4 },
                    ]}
                    // color
                    classForValue={(value) => {
                        if (!value) {
                            return "color-empty";
                        }
                        return `color-scale-${value.count}`;
                    }}
                    tooltipDataAttrs={(value) => {
                        if (!value || !value.date) {
                            return null;
                        }
                        // react-tooltipの構成
                        return {
                            "data-tip": `${value.date} has count: ${value.count}`,
                        };
                    }}
                />
            </div>
            <ReactTooltip />
        </div>
    );
};

export default HeatMap;
