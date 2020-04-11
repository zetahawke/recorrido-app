import React from 'react';
import { useParams } from "react-router-dom";

const RoadRoutes = () => {
  let { roadRouteId } = useParams();
  console.log(roadRouteId);
  debugger;

  return (
    <div>
      <h1>
        Road Routes {roadRouteId}
      </h1>
    </div>
  );
}

export default RoadRoutes