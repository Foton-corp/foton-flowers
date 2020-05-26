import React from 'react';
import {
  YMaps, Map, Clusterer, Placemark,
} from './ymaps';

const points = [
  [40.177811, 44.519192], [40.186250, 44.511995],
];

const mapState = {
  center: [40.177811, 44.519192],
  zoom: 15,
  behaviors: ['default', 'scrollZoom'],
};

const getPointData = (index) => ({
  balloonContentBody: `placemark <strong>balloon ${index}</strong>`,
  clusterCaption: `placemark <strong>${index}</strong>`,
});

const getPointOptions = () => ({
  preset: 'islands#violetIcon',
});

function App() {
  return (
    <div className="App">
      <YMaps>
        <Map state={mapState}>
          <Clusterer
            options={{
              preset: 'islands#invertedVioletClusterIcons',
              groupByCoordinates: false,
              clusterDisableClickZoom: true,
              clusterHideIconOnBalloonOpen: false,
              geoObjectHideIconOnBalloonOpen: false,
            }}
          >
            {points.map((coordinates, idx) => (
              <Placemark
                key={idx}
                geometry={{ coordinates }}
                properties={getPointData(idx)}
                options={getPointOptions()}
              />
            ))}
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  );
}

export default App;
