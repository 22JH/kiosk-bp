import { useState } from "react";
import { connect } from "react-redux";
import { Histogram } from "./Histogram";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const BUTTONS_HEIGHT = 50;

const HistogramDatasetTransition = ({ width, height, histogram }) => {
  const [data, setData] = useState([]);
  const 임시data1 = useSelector((state) => state);
  const 임시data2 = useSelector((state) => state);
  const url = useLocation().pathname;
  useEffect(() => {
    if (url == "/admin/total-income") {
      setData(임시data1.histogramReducer.data);
    } else {
      setData(임시data2?.getUseageReducer?.data);
    }
  }, [임시data1, 임시data2, setData]);
  console.log("data", data?.data);
  return (
    <div>
      {data?.data?.length > 5 ? (
        <Histogram
          width={width}
          height={height - BUTTONS_HEIGHT}
          data={data?.data}
        />
      ) : (
        "loading"
      )}
    </div>
  );
};

const mapStateToProps = ({ histogram }) => {
  return { histogram };
};

export default connect(mapStateToProps, null)(HistogramDatasetTransition);
