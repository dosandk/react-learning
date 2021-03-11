import React from "react";
import "./ColumnChart.css";

export default class ColumnChart extends React.Component {
  chartHeight = 50;

  render() {
    const { label, value, data, classWrapper } = this.props;

    return (
      <div className={classWrapper}>
        <div className={"column-chart" + (!data.length ? " column-chart_loading" : "")}>
          <div className="column-chart__title">
            Total {label}
            { this.getLink() }
          </div>
          <div className="column-chart__container">
            <div className="column-chart__header">{value}</div>
            <div className="column-chart__chart">
              { this.getColumnBody(data) }
            </div>
          </div>
        </div>
      </div>
    );
  }

  getLink () {
    const { link } = this.props;

    return link ? <a className="column-chart__link" href={link}>View all</a> : null;
  }

  getColumnBody(data) {
    const maxValue = Math.max(...data);
    const scale = this.chartHeight / maxValue;

    return data.map((item, index) => {
      const percent = ((item / maxValue) * 100).toFixed(0);

      return (
        <div
          key={index}
          style={{ "--value": Math.floor(item * scale) }}
          data-tooltip={percent + "%"}
        />
      );
    });
  }
}
