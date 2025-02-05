import React from "react";
import "../stylesheets/HeatMapLegend.css";

const HeatMapLegend = ({type}) => {
    const legends = {
      demographic: [
        { label: "0%-9%", color: "#E1BEE7" },
        { label: "10%-19%", color: "#D1A6DD" },
        { label: "20%-29%", color: "#C388D4" },
        { label: "30%-39%", color: "#B46BCC" },
        { label: "40%-49%", color: "#A452C4" },
        { label: "50%-59%", color: "#9C27B0" },
        { label: "60%-69%", color: "#8E24AA" },
        { label: "70%-79%", color: "#7B1FA2" },
        { label: "80%-89%", color: "#6A1B9A" },
        { label: "90%-100%", color: "#4A148C" },
      ],
      economicIncome: [
        { label: "$0-$34,999", color: "#D8FFD6" },
        { label: "$35,000-$59,999", color: "#B4EAB0" },
        { label: "$60,000-$99,999", color: "#91D48A" },
        { label: "$100,000-$124,999", color: "#6DBF64" },
        { label: "$125,000-$149,999", color: "#47AA3C" },
        { label: "$150,000 or more", color: "#0A9400" },
      ],
      economicRegions: [
        { label: "Urban", color: "#2a3eb3" },
        { label: "Suburban", color: "#008f9d" },
        { label: "Rural", color: "#80d043" },
      ],
      economicPoverty: [
        { label: "0% - 10%", color: "#FFCCBC" },
        { label: "11% - 20%", color: "#FFAB91" },
        { label: "21% - 30%", color: "#FF8A65" },
        { label: "31% - 40%", color: "#FF7043" },
        { label: "41% - 50%", color: "#FF5722" },
        { label: "51% - 60%", color: "#F4511E" },
        { label: "61% - 70%", color: "#E64A19" },
        { label: "Above 70%", color: "#D84315" },
    ],
      economicPolitical: {
        Republican: [
          { label: "$0-$34,999", color: "#FFCDD2" },
          { label: "$35,000-$59,999", color: "#EF9A9A" },
          { label: "$60,000-$99,999", color: "#E57373" },
          { label: "$100,000-124,999", color: "#EF5350" },
          { label: "$125,000-$149,999", color: "#F44336" },
          { label: "$150,000 or more", color: "#D32F2F" },
        ],
        Democratic: [
          { label: "$0-$34,999", color: "#BBDEFB" },
          { label: "$35,000-$59,999", color: "#90CAF9" },
          { label: "$60,000-$99,999", color: "#64B5F6" },
          { label: "$100,000-$124,999", color: "#42A5F5" },
          { label: "$125,000-$149,999", color: "#2196F3" },
          { label: "$150,000 or more", color: "#1976D2" },
        ],
      },
    };

    const legendItems = legends[type];

    return (
        <div className="heatmap-legend">
        <h4>{type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Heatmap Legend</h4>
        {Array.isArray(legendItems) ? (
          legendItems.map((item, index) => (
            <div key={index} className="legend-item">
              <span className="legend-color" style={{ backgroundColor: item.color }}></span>
              <span className="legend-label">{item.label}</span>
            </div>
          ))
        ) : (
          Object.entries(legendItems).map(([category, items], index) => (
            <div key={index}>
              <h5>{category}</h5>
              {items.map((item, subIndex) => (
                <div key={subIndex} className="legend-item">
                  <span className="legend-color" style={{ backgroundColor: item.color }}></span>
                  <span className="legend-label">{item.label}</span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    );
};

export default HeatMapLegend;